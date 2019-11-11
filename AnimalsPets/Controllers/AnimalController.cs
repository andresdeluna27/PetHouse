using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AnimalsPets.Models;
using AnimalsPets.Services.AnimalService;
using Microsoft.AspNetCore.Mvc;

namespace AnimalsPets.Controllers
{
    //[Route("api/[controller]")]
    [ApiController]
    public class AnimalController : ControllerBase
    {

        private readonly IAnimalService _animalService;

        public AnimalController(IAnimalService animalService)
        {
            _animalService = animalService;
        }

        // Recupera todos los animales 
        [HttpGet]
        [Route("api/animal")]
        public IActionResult GetAll()
        {
            return Ok(_animalService.GetAnimals());
           // return Ok(new string[] { "value1", "value2" });
        }

        // GET api/values/5
        [HttpGet]
        [Route("api/animal/razas")]
        public IActionResult GetRazas(string raza)
        {
            return Ok(_animalService.GetAnimalsPorRaza(raza));
        }

        // Añade un animal nuevo
        [HttpPost]
        [Route("api/animal")]
        //public IActionResult Post([FromBody] Animal amigo)
        public IActionResult Post(string nombre, string raza, int edad, string imagen)
        {
            Animal amigo = new Animal()
            {
                Nombre = nombre, Raza=raza, Edad=edad, CentroId=5, Imagen=imagen
            };
        int result =_animalService.AddAnimal(amigo);
            if (result == 0)
                return Ok();
            return BadRequest();
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // Elimina al animal seleccionado
        [HttpDelete("{id}")]
        [Route("api/animal")]
        public void Delete(int id)
        {
            _animalService.DeleteAnimal(id);
        }
    }
}
