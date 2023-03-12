#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
RUN cd BattleTaskApi
COPY ["BattleTaskApi/BattleTaskApi.csproj", "BattleTaskApi/"]
RUN dotnet restore "BattleTaskApi/BattleTaskApi.csproj"
COPY . .
WORKDIR "/src/BattleTaskApi"
RUN dotnet build "BattleTaskApi.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "BattleTaskApi.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "BattleTaskApi.dll"]
