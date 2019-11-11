using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http.Cors;
using AnimalsPets.Models;
using AnimalsPets.Services.AdopcionService;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AnimalsPets.Controllers
{
    //[Route("api/[controller]")]
    [EnableCors("*","*","*")]
    [ApiController]
    public class AdopcionController : ControllerBase
    {
        private readonly IAdopcionService _adopcionService;

        public AdopcionController(IAdopcionService adopcionService)
        {
            _adopcionService = adopcionService;
        }
        // GET: api/Adopcion
        [HttpGet]
        [Route("api/adopcion/solicitudes")]
        public IActionResult GetSolicitudes(int animalId)
        {
            return Ok(_adopcionService.GetSolicitudesPorId(animalId));
        }

        // GET: api/Adopcion/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Adopcion
        [HttpPost]
        [Route("api/adopcion/persona")]
        public IActionResult Post(string nombre,string apeP, string apeM,int edad,string domicilio)
        {
            Persona per = new Persona()
            {
                Nombre=nombre,ApellidoM=apeM,ApellidoP=apeP,Edad=edad,Domicilio=domicilio
            };
            if (_adopcionService.AddPersona(per) == 1)
                return BadRequest();
            return Ok();
        }

        [HttpPost]
        [Route("api/adopcion/solicitud")]
        //public IActionResult PostSolicitud([FromBody] bodyActions parametro)
        public IActionResult PostSolicitud(string owner,int animal)
        {
            if(_adopcionService.SolicitudAdopcion(owner, animal)==1)
                return BadRequest();
            return Ok();
        }

        // PUT: api/Adopcion/5
        [HttpPatch("api/adopcion/final")]
        public IActionResult UpdateAnimal(int owner, int animal)
        {
            if (_adopcionService.AdoptarAmigo(owner, animal) == 1)
                return BadRequest();
            return Ok();
        }

        // PUT: api/Adopcion/5
        [HttpPut("api/adopcion")]
        public IActionResult Put([FromBody] bodyActions value)
        {
            if (_adopcionService.AdoptarAmigo(value.owner, value.animal) == 1)
                return BadRequest();
            return Ok();
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
