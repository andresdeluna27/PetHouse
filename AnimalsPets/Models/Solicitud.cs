using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AnimalsPets.Models
{
    public class Solicitud
    {
        public int Id { get; set; }
        public int OwnerId { get; set; }
        public int AnimalId { get; set; }
        public int Progress { get; set; }
        public DateTime Fecha { get; set; }
        public string Nombre { get; set; }
    }
}
