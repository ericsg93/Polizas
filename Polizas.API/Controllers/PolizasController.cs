using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Polizas.API;
using Polizas.API.Models;

namespace Polizas.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PolizasController : ControllerBase
    {
        private readonly DataContext _context;

        public PolizasController(DataContext context)
        {
            _context = context;
        }

        // GET: api/Polizas
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Poliza>>> GetPolizas()
        {
            return await _context.Polizas.ToListAsync();
        }

        // GET: api/Polizas/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Poliza>> GetPoliza(int id)
        {
            var poliza = await _context.Polizas.FindAsync(id);

            if (poliza == null)
            {
                return NotFound();
            }

            return poliza;
        }

        // PUT: api/Polizas/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPoliza(int id, Poliza poliza)
        {
            if (id != poliza.Id)
            {
                return BadRequest();
            }

            _context.Entry(poliza).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PolizaExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Polizas
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<Poliza>> PostPoliza(Poliza poliza)
        {
            _context.Polizas.Add(poliza);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPoliza", new { id = poliza.Id }, poliza);
        }

        // DELETE: api/Polizas/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Poliza>> DeletePoliza(int id)
        {
            var poliza = await _context.Polizas.FindAsync(id);
            if (poliza == null)
            {
                return NotFound();
            }

            _context.Polizas.Remove(poliza);
            await _context.SaveChangesAsync();

            return poliza;
        }

        private bool PolizaExists(int id)
        {
            return _context.Polizas.Any(e => e.Id == id);
        }
    }
}
