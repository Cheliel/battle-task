using MySql.Data.MySqlClient;

namespace BattleTaskApi.Bdd
{
    public class SqlManager
    {
        private static MySqlConnection conn = new MySqlConnection();
        public static MySqlConnection Connect()
        {
            string server = "localhost";
            string database = "battletask";
            string user = "root";
            string password = "";
            string port = "3306";
            string sslM = "none";

            string connString = String.Format("server={0};port={1};user id={2}; password={3}; database={4}; SslMode={5}", server, port, user, password, database, sslM);

            conn = new MySqlConnection(connString);
            return conn;
        }
    }
}
