using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AnimalsPets.Models;
using AnimalsPets.Services.AnimalService;
using Microsoft.AspNetCore.Mvc;

namespace AnimalsPets.Controllers
{
    [Route("api/[controller]")]
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
        public IActionResult Get()
        {
            return Ok(_animalService.GetAnimals());
           // return Ok(new string[] { "value1", "value2" });
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            return Ok("value");
        }

        // Añade un animal nuevo
        [HttpPost]
        public IActionResult Post([FromBody] Animal amigo)
        {
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
        public void Delete(int id)
        {
            _animalService.DeleteAnimal(id);
        }
    }
}
