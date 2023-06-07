using BattleTaskApi.Models;
using MySql.Data.MySqlClient;
using System.Data.Common;

namespace BattleTaskApi.Bdd
{
    public class AuthBdd
    {
        public string GetAuth(UtilisateurModel user)
        {
            MySqlConnection connection = SqlManager.Connect();
            connection.Open();

            MySqlCommand sqlCommand = new MySqlCommand();
            sqlCommand.Connection = connection;
            sqlCommand.CommandText = "SELECT Id FROM utilisateur WHERE Email = @email && Password = @password;";

            sqlCommand.Parameters.AddWithValue("@email", user.Email);
            sqlCommand.Parameters.AddWithValue("@password", user.Password);
            sqlCommand.Prepare();

            string id = "";

            using (DbDataReader reader = sqlCommand.ExecuteReader())
            {
                if (reader.HasRows)
                {

                    while (reader.Read())
                    {
                        id = reader.GetString(0);
                    }

                }
            }

            connection.Close();

            return id;
        }
    }
}
