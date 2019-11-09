using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AnimalsPets.Models;
using AnimalsPets.Services.AdopcionService;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AnimalsPets.Controllers
{
    [Route("api/[controller]")]
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
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
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
        public IActionResult Post([FromBody] Persona value)
        {
            return Ok();
        }

        // PUT: api/Adopcion/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
