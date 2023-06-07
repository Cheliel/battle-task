using BattleTaskApi.Models;
using MySql.Data.MySqlClient;

namespace BattleTaskApi.Bdd
{
    public class UtilisateurController
    {
        public void PostCollection(UtilisateurModel utilisateurModel)
        {
            utilisateurModel.Id = Guid.NewGuid().ToString();
            MySqlConnection connection = SqlManager.Connect();
            connection.Open();

            MySqlCommand sqlCommand = new MySqlCommand();
            sqlCommand.Connection = connection;
            sqlCommand.CommandText = "INSERT INTO utilisateur VALUES (@idAccount, @Pseudo, @Email, @Password);";

            sqlCommand.Parameters.AddWithValue("@idAccount", utilisateurModel.Id);
            sqlCommand.Parameters.AddWithValue("@Pseudo", utilisateurModel.Pseudo);
            sqlCommand.Parameters.AddWithValue("@Email", utilisateurModel.Email);
            sqlCommand.Parameters.AddWithValue("@Password", utilisateurModel.Password);
            sqlCommand.Prepare();

            sqlCommand.ExecuteNonQuery();
        }
    }
}
