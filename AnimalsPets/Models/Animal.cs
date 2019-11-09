using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AnimalsPets.Models
{
    public class Animal
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public string Raza { get; set; }
        public int Edad { get; set; }
        public int OwnerId { get; set; }
        public int CentroId { get; set; }
    }
}
