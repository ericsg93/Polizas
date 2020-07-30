using Polizas.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Polizas.API.Repositories
{
    public interface IAuthRepository
    {
        Task<User> Login(string username, string password);
    }
}
