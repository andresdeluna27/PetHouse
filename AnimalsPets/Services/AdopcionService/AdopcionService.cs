using AnimalsPets.Models;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using MySql.Data.MySqlClient;

namespace AnimalsPets.Services.AdopcionService
{
    public class AdopcionService : IAdopcionService
    {
        SqlConnection Conn;
        MySqlConnection MysqlCon;
        public AdopcionService()
        {
            //Conn = new SqlConnection("Data Source=FRT_FLUNA\\SQLEXPRESS;Initial Catalog=Refugio;Integrated Security=True");
            //Conn = new SqlConnection("Data Source=nt71li6axbkq1q6a.cbetxkdyhwsb.us-east-1.rds.amazonaws.com;Initial Catalog=lhvbheof00bugh9n;User ID=rxpl4wsl9zkor14u;Password=dz9ox3gyrph6ppsj;Integrated Security=True");
            Conn = new SqlConnection("Data Source=localhost:3306;Initial Catalog=prueba;User ID=root;Password=270596paCO;Integrated Security=True");
            //"Data Source=;Initial Catalog=Animal;User ID=rxpl4wsl9zkor14u;Password=dz9ox3gyrph6ppsj;Pooling=True;MultipleActiveResultSets=True;"
            string connetionString = null;
            connetionString = "server=nt71li6axbkq1q6a.cbetxkdyhwsb.us-east-1.rds.amazonaws.com;database=lhvbheof00bugh9n;uid=rxpl4wsl9zkor14u;pwd=dz9ox3gyrph6ppsj;Convert Zero Datetime=True";
            MysqlCon = new MySqlConnection(connetionString);
        }

        public int AdoptarAmigo(int owner, int id)
        {

            string sql = $@"UPDATE Animal SET OwnerId={owner} where Id = {id}";
            string updateSolicitud = $@"UPDATE Solicitudes SET Progress=1 WHERE OwnerId={owner} AND AnimalId={id}";
            List<Exception> exceptions = new List<Exception>();
            try
            {
                MysqlCon.Open();
                MysqlCon.Close();
                /*Conn.Open();
                SqlCommand command = new SqlCommand(sql, Conn);
                command.ExecuteNonQuery();
                command.CommandText = updateSolicitud;
                command.ExecuteNonQuery();*/

            }
            catch (Exception e)
            {
                exceptions.Add(e);
                return 1;
            }
            return 0;
        }

        public int AddPersona(Persona persona)
        {
            string sql = $@"INSERT INTO Persona ( Nombre,ApellidoP,ApellidoM ,Edad , Domicilio ) VALUES 
                            ( '{persona.Nombre}', '{persona.ApellidoP}', '{persona.ApellidoM}',{persona.Edad}, '{persona.Domicilio}')";
            List<Exception> exceptions = new List<Exception>();
            try
            {
                /*Conn.Open();
                SqlCommand command = new SqlCommand(sql, Conn);
                command.ExecuteNonQuery();*/
                MysqlCon.Open();

                MySqlCommand mycomand = new MySqlCommand(sql, MysqlCon);
                mycomand.ExecuteReader();
                MysqlCon.Close();
            }
            catch (Exception e)
            {
                exceptions.Add(e);
                return 1;
            }
            return 0;
        }

        public int SolicitudAdopcion(string owner,int animal)
        {
            
            string ownerId = $@"SELECT Id FROM Persona WHERE Nombre='{owner}'";
            List<Exception> exceptions = new List<Exception>();
            try
            {
                /*
                Conn.Open();
                SqlCommand command = new SqlCommand(ownerId, Conn);
                SqlDataReader reader = command.ExecuteReader();
                reader.Read();
                int Id = Convert.ToInt32(reader["Id"]);
                string sql = $@"INSERT INTO Solicitudes ( OwnerId, AnimalId, Progress, Fecha) VALUES 
                            ({Id}, {animal}, {0}, '{DateTime.Now}')";
                reader.Close();
                command.CommandText = sql;
                command.ExecuteNonQuery();
                Conn.Close();*/
                MysqlCon.Open();
                MySqlCommand command = new MySqlCommand(ownerId, MysqlCon);
                MySqlDataReader reader = command.ExecuteReader();
                reader.Read();
                int Id = Convert.ToInt32(reader["Id"]);
                string sql = $@"INSERT INTO Solicitudes ( OwnerId, AnimalId, Progress, Fecha) VALUES 
                            ({Id}, {animal}, {0}, NOW())";
                reader.Close();
                command.CommandText = sql;
                command.ExecuteNonQuery();
                MysqlCon.Close();
            }
            catch (Exception e)
            {
                exceptions.Add(e);
                return 1;
            }
            return 0;
        }

        public IEnumerable<Solicitud> GetSolicitudesPorId(int id)
        {
            List<Solicitud> res = new List<Solicitud>();
            string sql = @"SELECT s.*,p.Nombre FROM Solicitudes s
                            join Persona p on p.Id = s.OwnerId
                            WHERE Progress = 0 And AnimalId = "+id;
            List<Exception> exceptions = new List<Exception>();
            try
            {
                /*Conn.Open();
                SqlCommand command = new SqlCommand(sql, Conn);
                SqlDataReader reader = command.ExecuteReader();*/
                MysqlCon.Open();
                MySqlCommand command = new MySqlCommand(sql, MysqlCon);
                MySqlDataReader reader = command.ExecuteReader();
                while (reader.Read())
                {
                    try
                    {
                        res.Add(new Solicitud
                        {
                            Id = Convert.ToInt32(reader["Id"]),
                            AnimalId = Convert.ToInt32(reader["AnimalId"]),
                            Fecha = Convert.ToDateTime(reader["Fecha"]),
                            OwnerId = Convert.ToInt32(reader["OwnerId"]),
                            Nombre = Convert.ToString(reader["Nombre"])
                        });
                    }
                    catch (Exception e)
                    {
                        exceptions.Add(e);
                    }
                }

                reader.Close();
                command.Dispose();
                MysqlCon.Close();


            }
            catch (Exception e)
            {
                exceptions.Add(e);
            }

            return res;
        }

    }
}
