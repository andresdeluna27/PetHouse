using AnimalsPets.Models;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace AnimalsPets.Services.AdopcionService
{
    public class AdopcionService : IAdopcionService
    {
        SqlConnection Conn;
        public AdopcionService()
        {
            Conn = new SqlConnection("Data Source=FRT_FLUNA\\SQLEXPRESS;Initial Catalog=Refugio;Integrated Security=True");
        }

        public int AdoptarAmigo(int owner, int id)
        {
            string sql = $@"UPDATE Animal SET OwnerId={owner} where Id = {id}";
            string updateSolicitud = $@"UPDATE Solicitudes SET Progress=1 WHERE OwnerId={owner} AND AnimalId={id}";
            List<Exception> exceptions = new List<Exception>();
            try
            {
                Conn.Open();
                SqlCommand command = new SqlCommand(sql, Conn);
                command.ExecuteNonQuery();
                command.CommandText = updateSolicitud;
                command.ExecuteNonQuery();
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
                Conn.Open();
                SqlCommand command = new SqlCommand(sql, Conn);
                command.ExecuteNonQuery();
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
                            join persona p on p.Id = s.OwnerId
                            WHERE Progress = 0 And AnimalId = "+id;
            List<Exception> exceptions = new List<Exception>();
            try
            {
                Conn.Open();
                SqlCommand command = new SqlCommand(sql, Conn);
                SqlDataReader reader = command.ExecuteReader();
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
                Conn.Close();


            }
            catch (Exception e)
            {
                exceptions.Add(e);
            }

            return res;
        }

    }
}
