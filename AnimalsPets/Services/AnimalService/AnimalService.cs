using AnimalsPets.Models;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace AnimalsPets.Services.AnimalService
{
    public class AnimalService : IAnimalService
    {
        SqlConnection Conn;

        public AnimalService()
        {
            
            //Conn = new SqlConnection("Data Source = FRT_FLUNA\\SQLEXPRESS; Initial Catalog = Animal;User ID=Website;Password=W3bsit3!2015; Integrated Security = SSPI");
            Conn = new SqlConnection("Data Source=FRT_FLUNA\\SQLEXPRESS;Initial Catalog=Refugio;Integrated Security=True");
        }
        public IEnumerable<Animal> GetAnimals()
        {
            List < Animal > res=new List<Animal>();
            string sql = "Select * From Animal";
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
                        res.Add(new Animal
                        {
                            Id = Convert.ToInt32(reader["Id"]),
                            Nombre = Convert.ToString(reader["Nombre"]),
                            Raza = Convert.ToString(reader["Raza"]),
                            Edad = Convert.ToInt32(reader["Edad"]),
                            OwnerId = Convert.ToInt32(reader["OwnerId"]),
                            CentroId = Convert.ToInt32(reader["CentroId"])
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

        public IEnumerable<Animal> GetAnimalsPorRaza(string raza)
        {
            List<Animal> res = new List<Animal>();
            string sql = $"Select * From Animal Where Raza= '{raza}'";
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
                        res.Add(new Animal
                        {
                            Id = Convert.ToInt32(reader["Id"]),
                            Nombre = Convert.ToString(reader["Nombre"]),
                            Raza = Convert.ToString(reader["Raza"]),
                            Edad = Convert.ToInt32(reader["Edad"]),
                            OwnerId = Convert.ToInt32(reader["OwnerId"]),
                            CentroId = Convert.ToInt32(reader["CentroId"]),
                            Imagen = Convert.ToString(reader["Imagen"])
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

        public int AddAnimal(Animal nuevoAmigo)
        {
            Random r = new Random();
            int centro = r.Next(1, 2);
            string sql = $@"INSERT INTO Animal (Nombre,Raza ,Edad ,OwnerId ,CentroId,Imagen ) VALUES 
                            ('{nuevoAmigo.Nombre}', '{nuevoAmigo.Raza}', {nuevoAmigo.Edad},0, {centro}, '{nuevoAmigo.Imagen}')";
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

        public void DeleteAnimal(int animalId)
        {
            string sql = $@"DELETE FROM ANIMAL WHERE Id={animalId}";
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
            }
        }
    }
}
