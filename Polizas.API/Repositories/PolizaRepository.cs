using Polizas.API.Models;
using SQLitePCL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace Polizas.API.Repositories
{
    public class PolizaRepository : IPolizaRepository
    {

        private readonly DataContext _context;

        public PolizaRepository(DataContext context)
        {
            _context = context;
        }

        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }

        public void Delete<T>(T entity) where T : class
        {
            _context.Remove(entity);
        }

        public async Task<Poliza> GetPoliza(int id)
        {
            return await _context.Polizas.FirstOrDefaultAsync(p => p.Id == id);
        }

        public async Task<IEnumerable<Poliza>> GetPolizas()
        {
            return await _context.Polizas.Include(u => u.User).ToListAsync();
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}
