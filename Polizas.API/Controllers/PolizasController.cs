using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Polizas.API;
using Polizas.API.Dtos;
using Polizas.API.Models;
using Polizas.API.Repositories;

namespace Polizas.API.Controllers
{
    [AllowAnonymous]
    [Route("api/[controller]")]
    [ApiController]
    public class PolizasController : ControllerBase
    {
        private readonly IPolizaRepository _repo;
        private readonly IMapper _mapper;

        public PolizasController(IPolizaRepository repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }

        // GET: api/Polizas
        [HttpGet]
        public async Task<IActionResult> GetPolizas()
        {
            var polizas = await _repo.GetPolizas();

            var polizatoReturn = _mapper.Map<IEnumerable<PolizaToReturn>>(polizas);
            
            return Ok(polizatoReturn);
        } 

        // GET: api/Polizas/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetPoliza(int id)
        {
            var poliza = await _repo.GetPoliza(id);

            if (poliza == null)
            {
                return NotFound();
            }


           var polizatoReturn = _mapper.Map<PolizaToReturn>(poliza);
           
            return Ok(polizatoReturn);
        }

        // PUT: api/Polizas/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPoliza(int id, PolizaForUpdate polizaForUpdate)
        {
            var polizaFromRepo = await _repo.GetPoliza(id);

            _mapper.Map(polizaForUpdate, polizaFromRepo);

            if(await _repo.SaveAll())
            {
                return NoContent();
            }

            return BadRequest();
            
        }

        // POST: api/Polizas
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<IActionResult> PostPoliza(Poliza poliza)
        {
            _repo.Add(poliza);
            await _repo.SaveAll();

            return CreatedAtAction("GetPoliza", new { id = poliza.Id }, poliza);
        }

        // DELETE: api/Polizas/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePoliza(int id)
        {
            var poliza = await _repo.GetPoliza(id);
            if (poliza == null)
            {
                return NotFound();
            }

            _repo.Delete(poliza);
            await _repo.SaveAll();

            return NoContent();
        }
    }
}
