using Polizas.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Polizas.API.Repositories
{
    public interface IPolizaRepository
    {
        void Add<T>(T entity) where T : class;
        void Delete<T>(T entity) where T : class;
        Task<bool> SaveAll();
        Task<Poliza> GetPoliza(int id);
        Task<IEnumerable<Poliza>> GetPolizas();


    }
}
