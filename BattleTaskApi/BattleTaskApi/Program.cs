
using BattleTaskApi.Bdd;
using BattleTaskApi.Models;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.IdentityModel.Tokens;
using Org.BouncyCastle.Asn1.Ocsp;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace BattleTaskApi
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.
            builder.Services.AddAuthentication(options =>
            {
                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
            }).AddJwtBearer(o =>
            {
                o.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidIssuer = builder.Configuration["Jwt:Issuer"],
                    ValidAudience = builder.Configuration["Jwt:Audience"],
                    IssuerSigningKey = new SymmetricSecurityKey
                    (Encoding.UTF8.GetBytes(builder.Configuration["Jwt:Key"])),
                    ValidateIssuer = true,
                    ValidateAudience = true,
                    ValidateLifetime = false,
                    ValidateIssuerSigningKey = true
                }; ///Verifier si la collection / note etc... appartient a l'utilisateur
            });
            builder.Services.AddAuthorization();

            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddCors(p => p.AddPolicy("corsapp", builder =>
            {
                builder.WithOrigins("*").AllowAnyMethod().AllowAnyHeader();
            }));
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseCors("corsapp");
            app.UseHttpsRedirection();
            app.UseAuthentication();
            app.UseAuthorization();

            CollectionBdd colec = new CollectionBdd();
            app.Use((HttpContext context, RequestDelegate next) =>
            {
                string authHeader = context.Request.Headers["Authorization"].ToString();

                if (!String.IsNullOrEmpty(authHeader))
                {
                    string token = authHeader.Replace("Bearer ", "");

                    JwtSecurityTokenHandler jwtHandler = new JwtSecurityTokenHandler();
                    JwtSecurityToken jwtToken = jwtHandler.ReadJwtToken(token);
                    string id = jwtToken.Claims.First(claim => claim.Type == "Id").Value;

                    context.Items["userId"] = id;
                    return next(context);
                }
                else
                {
                    return next(context);
                }
               
            });
            app.MapPost("/Inscription", (HttpRequest request) =>
            {

            });
            app.MapPost("/Connexion", (HttpRequest request, UtilisateurModel user) =>
            {
                AuthBdd authBdd = new AuthBdd();

                string id = authBdd.GetAuth(user);
                if (!String.IsNullOrEmpty(id))
                {
                    string issuer = builder.Configuration["Jwt:Issuer"];
                    string audience = builder.Configuration["Jwt:Audience"];
                    byte[] key = Encoding.ASCII.GetBytes
                    (builder.Configuration["Jwt:Key"]);
                    var tokenDescriptor = new SecurityTokenDescriptor
                    {
                        Subject = new ClaimsIdentity(new[]
                        {
                        new Claim("Id", id),
                        new Claim(JwtRegisteredClaimNames.Jti,
                        Guid.NewGuid().ToString())
                        }),
                        Expires = DateTime.UtcNow.AddMinutes(999999),
                        Issuer = issuer,
                        Audience = audience,
                        SigningCredentials = new SigningCredentials
                        (new SymmetricSecurityKey(key),
                        SecurityAlgorithms.HmacSha512Signature)
                    };
                    JwtSecurityTokenHandler tokenHandler = new JwtSecurityTokenHandler();
                    SecurityToken token = tokenHandler.CreateToken(tokenDescriptor);
                    string stringToken = tokenHandler.WriteToken(token);

                    return Results.Json(stringToken);
                }
                else
                {
                    return Results.Json("");
                }
            }).AllowAnonymous();

            app.MapPost("/Inscription", (UtilisateurModel utilisateurModel) =>
            {
                UtilisateurController cdd = new UtilisateurController();

                cdd.PostCollection(utilisateurModel);
            });

            app.MapGet("/GetCollection", [Authorize] (HttpContext ctx) =>
            {
                string userId = ctx.Items["userId"].ToString();

                CollectionBdd cdd = new CollectionBdd();

                var t = cdd.GetCollection(userId);

                return Results.Json(t);
            });
            app.MapGet("/GetToDoList", [Authorize] (HttpContext ctx) =>
            {
                string userId = ctx.Items["userId"].ToString();

                CollectionBdd cdd = new CollectionBdd();

                List<CollectionApiModel> t = cdd.GetCollection(userId);

                ToDoListCollection toDoListCollection = new ToDoListCollection();

                var f = toDoListCollection.GetToDoList(t);
                return Results.Json(f);
            });
            app.MapPost("/Addtodolist", [Authorize] (HttpContext ctx, TodolistModel todolistModel) =>
            {
                string collectionId = ctx.Request.Query["collectionId"].ToString();

                ToDoListCollection toDoListCollection = new ToDoListCollection();

                toDoListCollection.PostToDoList(todolistModel, collectionId);

            });
            app.MapGet("/GetNotes", [Authorize] (HttpContext ctx) =>
            {
                string todolistid = ctx.Request.Query["idToDoList"].ToString();

                NoteBdd noteBdd = new NoteBdd();

                var n = noteBdd.GetNoteById(todolistid);
                return Results.Json(n);
            });

            app.MapGet("/GetNotesbydate", [Authorize] (HttpContext ctx) =>
            {
                string date = ctx.Request.Query["date"].ToString();
                string userId = ctx.Items["userId"].ToString();

                CollectionBdd cdd = new CollectionBdd();

                List<CollectionApiModel> t = cdd.GetCollection(userId);

                ToDoListCollection toDoListCollection = new ToDoListCollection();

                var f = toDoListCollection.GetToDoList(t);

                NoteBdd noteBdd = new NoteBdd();

                var n = noteBdd.GetNote(f, DateTime.Now.Date.ToString("yyyy-MM-dd"));

                return Results.Json(n);
            });
            app.MapPost("/AddNote", [Authorize] (HttpContext ctx, NoteModel noteModel) =>
            {
                string todolistId = ctx.Request.Query["todolistId"].ToString();

                NoteBdd noteBdd = new NoteBdd();

                noteBdd.PostNote(noteModel, todolistId);

            });
            app.MapPost("/AddCollection", [Authorize] (HttpContext ctx, CollectionModel collectionModel) =>
            {
                string userId = ctx.Items["userId"].ToString();
                CollectionBdd cdd = new CollectionBdd();

                cdd.PostCollection(collectionModel, userId);
            });

            app.MapPost("/DelCollection", [Authorize] (HttpContext ctx) =>
            {
                string userId = ctx.Items["userId"].ToString();
                string idCollection = ctx.Request.Query["idCollection"].ToString();
                CollectionBdd cdd = new CollectionBdd();

                cdd.DeleteCollection(idCollection, userId);
            });
            app.MapPost("/DelTodolist", [Authorize] (HttpContext ctx) =>
            {
                string userId = ctx.Items["userId"].ToString();
                string idTodolist = ctx.Request.Query["idTodolist"].ToString();
                ToDoListCollection cdd = new ToDoListCollection();

                cdd.DeleteToDoList(idTodolist, userId);
            });
            app.MapPost("/Delnote", [Authorize] (HttpContext ctx) =>
            {
                string idNote = ctx.Request.Query["idNote"].ToString();
                NoteBdd cdd = new NoteBdd();

                cdd.DeleteNote(idNote);
            });

            app.Run();
        }
    }
}
