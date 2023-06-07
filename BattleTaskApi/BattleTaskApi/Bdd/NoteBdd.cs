using BattleTaskApi.Models;
using MySql.Data.MySqlClient;
using System.Data.Common;

namespace BattleTaskApi.Bdd
{
    public class NoteBdd
    {
        public void PostNote(NoteModel noteModel, string id)
        {
            noteModel.Id = Guid.NewGuid().ToString();
            MySqlConnection connection = SqlManager.Connect();
            connection.Open();

            MySqlCommand sqlCommand = new MySqlCommand();
            sqlCommand.Connection = connection;
            sqlCommand.CommandText = "INSERT INTO note VALUES (@Id_Note ,@Texte,@Lieu,@DateCreate,@Echeance, @Checked, @Difficulte, @Duree, @estNotifie);";

            sqlCommand.Parameters.AddWithValue("@Id_Note", noteModel.Id);
            sqlCommand.Parameters.AddWithValue("@Texte", noteModel.Texte);
            sqlCommand.Parameters.AddWithValue("@Lieu", noteModel.Lieu);
            sqlCommand.Parameters.AddWithValue("@DateCreate", noteModel.DateCreate);
            sqlCommand.Parameters.AddWithValue("@Echeance", noteModel.Echeance);
            sqlCommand.Parameters.AddWithValue("@Checked", noteModel.Checked);
            sqlCommand.Parameters.AddWithValue("@Difficulte", noteModel.Difficulte);
            sqlCommand.Parameters.AddWithValue("@Duree", noteModel.Duree);
            sqlCommand.Parameters.AddWithValue("@estNotifie", noteModel.estNotifie);

            sqlCommand.Prepare();

            sqlCommand.ExecuteNonQuery();
            sqlCommand.CommandText = "INSERT INTO todolist_note VALUES (@Id_ToDoList, @Id_Note);";
            sqlCommand.Parameters.AddWithValue("@Id_ToDoList", id);
            sqlCommand.Prepare();
            sqlCommand.ExecuteNonQuery();
        }

        public List<NoteModel> GetNoteById(string id)
        {
            List<NoteModel> noteModels = new List<NoteModel>();
            MySqlConnection connection = SqlManager.Connect();
            connection.Open();

            string sql = String.Format(String.Format("SELECT * FROM todolist_note INNER JOIN note ON todolist_note.Id_Note = note.Id WHERE Id_ToDoList = '{0}';", id));

            MySqlCommand sqlCommand = new MySqlCommand();
            sqlCommand.Connection = connection;
            sqlCommand.CommandText = sql;

            using (DbDataReader reader = sqlCommand.ExecuteReader())
            {
                if (reader.HasRows)
                {

                    while (reader.Read())
                    {
                        noteModels.Add(new NoteModel
                        {
                            Id = reader.GetString(2),
                            Texte = reader.GetString(3),
                            Lieu = reader.GetString(4),
                            DateCreate = reader.GetDateTime(5),
                            Echeance = reader.GetDateTime(6),
                            Checked = reader.GetBoolean(7),
                            Difficulte = reader.GetInt32(8),
                            estNotifie = reader.GetBoolean(10),
                        });
                    }

                }
            }
            return noteModels;
        }
        public List<NoteModel> GetNote(List<CollectionToDoListModel> todoList, string day = "")
        {
            List<NoteModel> noteModels = new List<NoteModel>();
            MySqlConnection connection = SqlManager.Connect();
            connection.Open();

            foreach (var t in todoList)
            {
                string sql = "";
                if(String.IsNullOrEmpty(day))
                {
                    sql = String.Format(String.Format("SELECT * FROM todolist_note INNER JOIN note ON todolist_note.Id_Note = note.Id WHERE Id_ToDoList = '{0}';", t.IdTodolist));
                }
                else if(!String.IsNullOrEmpty(day))
                {
                    sql = String.Format(String.Format("SELECT * FROM todolist_note INNER JOIN note ON todolist_note.Id_Note = note.Id WHERE Id_ToDoList = '{0}' && note.Echeance = '{1}' ;", t.IdCollection, day));
                }
                MySqlCommand sqlCommand = new MySqlCommand();

                sqlCommand.Connection = connection;
                sqlCommand.CommandText = sql;

                using (DbDataReader reader = sqlCommand.ExecuteReader())
                {
                    if (reader.HasRows)
                    {

                        while (reader.Read())
                        {
                            noteModels.Add(new NoteModel
                            {
                                Id = reader.GetString(2),
                                Texte = reader.GetString(3),
                                Lieu = reader.GetString(4),
                                DateCreate = reader.GetDateTime(5),
                                Echeance = reader.GetDateTime(6),
                                Checked = reader.GetBoolean(7),
                                Difficulte = reader.GetInt32(8),
                                estNotifie = reader.GetBoolean(10),
                                CollectionId = t.IdCollection,
                                TodolistId = t.IdTodolist,
                            });
                        }

                    }
                }
            }

            return noteModels;

        }

        public void DeleteNote(string noteId)
        {
            MySqlConnection connection = SqlManager.Connect();
            connection.Open();

            string sql = "";
            MySqlCommand sqlCommande = new MySqlCommand();

            sqlCommande.Connection = connection;

            sql = String.Format("DELETE FROM todolist_note WHERE todolist_note.Id_Note = '{0}'", noteId);
            sqlCommande.CommandText = sql;

            sqlCommande.ExecuteNonQuery();

            sql = String.Format("DELETE FROM note WHERE note.Id = '{0}'", noteId);
            sqlCommande.CommandText = sql;

            sqlCommande.ExecuteNonQuery();

            connection.Close();
        }
    }
}
