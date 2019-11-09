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
            string sql = $@"INSERT INTO Persona (Id , Nombre,ApellidoP,ApellidoM ,Edad , Domicilio ) VALUES 
                            ({persona.Id}, '{persona.Nombre}', '{persona.ApellidoP}', {persona.ApellidoM},{persona.Edad}, {persona.Domicilio})";
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

        public int SolicitudAdopcion(int owner,int animal)
        {
            string sql = $@"INSERT INTO Solicitudes (Id, OwnerId, AnimalId, Progress, Fecha) VALUES 
                            (1,{owner}, '{animal}', '{0}', {DateTime.Now})";
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
    }
}
