using BattleTaskApi.Models;
using MySql.Data.MySqlClient;
using System;
using System.Data.Common;

namespace BattleTaskApi.Bdd
{
    public class ToDoListCollection
    {
        public void PostToDoList(TodolistModel toDoListModel, string id)
        {
            toDoListModel.Id = Guid.NewGuid().ToString();
            MySqlConnection connection = SqlManager.Connect();
            connection.Open();

            MySqlCommand sqlCommand = new MySqlCommand();
            sqlCommand.Connection = connection;
            sqlCommand.CommandText = "INSERT INTO todolist VALUES (@titre,@dateCreate,@Echeance,@estNotifier,@idToDoList);";

            sqlCommand.Parameters.AddWithValue("@titre", toDoListModel.Titre);
            sqlCommand.Parameters.AddWithValue("@dateCreate", toDoListModel.DateCreation);
            sqlCommand.Parameters.AddWithValue("@Echeance", toDoListModel.Echeance);
            sqlCommand.Parameters.AddWithValue("@estNotifier", toDoListModel.EstNotifier);
            sqlCommand.Parameters.AddWithValue("@idToDoList", toDoListModel.Id);

            sqlCommand.Prepare();

            sqlCommand.ExecuteNonQuery();
            sqlCommand.CommandText = "INSERT INTO todolist_collection VALUES (@Id_Collection, @idToDoList);";
            sqlCommand.Parameters.AddWithValue("@Id_Collection", id);
            sqlCommand.Prepare();
            sqlCommand.ExecuteNonQuery();
        }

        public List<CollectionToDoListModel> GetToDoList(List<CollectionApiModel> Collection)
        {
            List<CollectionToDoListModel> todolistModels = new List<CollectionToDoListModel>();
            MySqlConnection connection = SqlManager.Connect();
            connection.Open();

            foreach (var t in Collection)
            {
                string sql = String.Format(String.Format("SELECT * FROM todolist_collection INNER JOIN todolist ON todolist_collection.Id_ToDoList = todolist.Id INNER JOIN collection ON todolist_collection.Id_Collection = collection.Id WHERE Id_Collection = '{0}'", t.Id));

                MySqlCommand sqlCommand = new MySqlCommand();

                sqlCommand.Connection = connection;
                sqlCommand.CommandText = sql;

                using (DbDataReader reader = sqlCommand.ExecuteReader())
                {
                    if (reader.HasRows)
                    {

                        while (reader.Read())
                        {
                            todolistModels.Add(new CollectionToDoListModel
                            {
                                IdTodolist = reader.GetString(1),
                                IdCollection = reader.GetString(0),
                                NameToDoList = reader.GetString(2),
                                NameCollection = reader.GetString(8)
                            }); ;
                        }

                    }
                }
            }
            connection.Close();


            NoteBdd notebdd = new NoteBdd();
            var notes = notebdd.GetNote(todolistModels);

            foreach (var todo in todolistModels)
            {
                todo.Facile = 0;
                todo.Moyen = 0;
                todo.Dificile = 0;
                todo.TresDificile = 0;
                foreach (var note in notes)
                {
                    if (note.TodolistId == todo.IdTodolist)
                    {
                        switch (note.Difficulte)
                        {
                            case 1:
                                todo.Facile++;
                                break;
                            case 2:
                                todo.Moyen++;
                                break;
                            case 3:
                                todo.Dificile++;
                                break;
                            case 4:
                                todo.TresDificile++;
                                break;
                        }
                    }
                }

            }
            return todolistModels;
        }

        public void DeleteToDoList(string idTodoList, string userId)
        {
            MySqlConnection connection = SqlManager.Connect();
            connection.Open();

            CollectionBdd collectionBdd = new CollectionBdd();
            NoteBdd notebdd = new NoteBdd();
            var collection = collectionBdd.GetCollection(userId);

            var todolist = this.GetToDoList(collection).Where(x => x.IdTodolist == idTodoList).ToList();

            var notes = notebdd.GetNote(todolist);

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

            connection.Close();
        }
    }
}
