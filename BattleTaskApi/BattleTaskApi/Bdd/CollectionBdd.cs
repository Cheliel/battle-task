using BattleTaskApi.Models;
using Microsoft.AspNetCore.SignalR;
using MySql.Data.MySqlClient;
using System.Data.Common;
using System.Drawing;
using System.Security.Cryptography;
using System.Security.Principal;

namespace BattleTaskApi.Bdd
{
    public class CollectionBdd
    {
        public void PostCollection(CollectionModel collectionModel, string id)
        {
            collectionModel.Id = Guid.NewGuid().ToString();
            MySqlConnection connection = SqlManager.Connect();
            connection.Open();

            MySqlCommand sqlCommand = new MySqlCommand();
            sqlCommand.Connection = connection;
            sqlCommand.CommandText = "INSERT INTO collection VALUES (@idCollection, @titre, @couleur, @estNotifier);";

            sqlCommand.Parameters.AddWithValue("@idCollection", collectionModel.Id);
            sqlCommand.Parameters.AddWithValue("@titre", collectionModel.Titre);
            sqlCommand.Parameters.AddWithValue("@couleur", collectionModel.Color);
            sqlCommand.Parameters.AddWithValue("@estNotifier", collectionModel.IsNotif);
            sqlCommand.Prepare();

            sqlCommand.ExecuteNonQuery();
            sqlCommand.CommandText = "INSERT INTO collection_utilisateur VALUES (@idUtilisateur, @idCollection);";
            sqlCommand.Parameters.AddWithValue("@idUtilisateur", id);
            sqlCommand.Prepare();
            sqlCommand.ExecuteNonQuery();

            connection.Close();
        }
        public List<CollectionApiModel> GetCollection(string userId)
        {
            List<CollectionApiModel> collectionModels = new List<CollectionApiModel>();
            MySqlConnection connection = SqlManager.Connect();
            connection.Open();

            string sql = String.Format("SELECT * FROM `collection` INNER JOIN collection_utilisateur ON collection_utilisateur.Id_collection = collection.Id WHERE collection_utilisateur.Id_utilisateur = '{0}';", userId);

            MySqlCommand sqlCommand = new MySqlCommand();

            sqlCommand.Connection = connection;
            sqlCommand.CommandText = sql;

            using (DbDataReader reader = sqlCommand.ExecuteReader())
            {
                if (reader.HasRows)
                {

                    while (reader.Read())
                    {
                        collectionModels.Add(new CollectionApiModel
                        {
                            Id = reader.GetString(0),
                            Titre = reader.GetString(1),
                            Color = reader.GetString(2),
                            IsNotif = reader.GetBoolean(3),
                        });
                    }

                }
            }

            connection.Close();

            ToDoListCollection todolistcollection = new ToDoListCollection();

            var todolist = todolistcollection.GetToDoList(collectionModels);

            NoteBdd noteBdd = new NoteBdd();

            var notes = noteBdd.GetNote(todolist);

            List<CollectionApiModel> collectionApiModel = new List<CollectionApiModel>();


            int index = 0;
            foreach(var collection in collectionModels)
            {
                collectionApiModel.Add(new CollectionApiModel()
                {
                    Id = collection.Id,
                    Titre = collection.Titre,
                    Color =  collection.Color,
                    IsNotif = collection.IsNotif,
                    Facile = 0,
                    Moyen = 0,
                    Dificile = 0,
                    TresDificile = 0,
                });
                foreach (var note in notes)
                {
                    if(note.CollectionId == collection.Id) {
                        switch(note.Difficulte) {
                            case 1:
                                collectionApiModel[index].Facile++;
                                break;
                            case 2:
                                collectionApiModel[index].Moyen++; 
                                break;
                            case 3: 
                                collectionApiModel[index].Dificile++;
                                break;
                            case 4:
                                collectionApiModel[index].TresDificile++; 
                                break;
                        }
                    }
                }
                index++;
            }

            return collectionApiModel;

        }

        public void DeleteCollection(string idCollection, string userId)
        {
            MySqlConnection connection = SqlManager.Connect();
            connection.Open();

            ToDoListCollection toDoListCollection = new ToDoListCollection();
            NoteBdd noteBdd = new NoteBdd();

            var todolist = toDoListCollection.GetToDoList(this.GetCollection(userId).Where(x => x.Id == idCollection).ToList());
            var notes = noteBdd.GetNote(todolist);


            string sql = "";
            foreach (var note in notes)
            {
                sql = String.Format("DELETE FROM todolist_note WHERE todolist_note.Id_Note = '{0}'", note.Id);

                MySqlCommand sqlCommand = new MySqlCommand();

                sqlCommand.Connection = connection;
                sqlCommand.CommandText = sql;

                sqlCommand.ExecuteNonQuery();
            }
            foreach (var note in notes)
            {
                sql = String.Format("DELETE FROM note WHERE note.Id = '{0}'", note.Id);

                MySqlCommand sqlCommand = new MySqlCommand();

                sqlCommand.Connection = connection;
                sqlCommand.CommandText = sql;

                sqlCommand.ExecuteNonQuery();
            }
            foreach (var todo in todolist)
            {
                sql = String.Format("DELETE FROM todolist_collection WHERE todolist_collection.Id_ToDoList = '{0}'", todo.IdTodolist);

                MySqlCommand sqlCommand = new MySqlCommand();

                sqlCommand.Connection = connection;
                sqlCommand.CommandText = sql;

                sqlCommand.ExecuteNonQuery();
            }
            foreach (var todo in todolist)
            {
                sql = String.Format("DELETE FROM todolist WHERE todolist.Id = '{0}'", todo.IdTodolist);

                MySqlCommand sqlCommand = new MySqlCommand();

                sqlCommand.Connection = connection;
                sqlCommand.CommandText = sql;

                sqlCommand.ExecuteNonQuery();
            }

            MySqlCommand sqlCommande = new MySqlCommand();

            sqlCommande.Connection = connection;

            sql = String.Format("DELETE FROM collection_utilisateur WHERE collection_utilisateur.Id_collection = '{0}'", idCollection);
            sqlCommande.CommandText = sql;

            sqlCommande.ExecuteNonQuery();

            sql = String.Format("DELETE FROM collection WHERE collection.Id = '{0}'", idCollection);
            sqlCommande.CommandText = sql;

            sqlCommande.ExecuteNonQuery();

            connection.Close();
        }
    }
}
