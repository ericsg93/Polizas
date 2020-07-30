using Microsoft.AspNetCore.Mvc.ModelBinding.Validation;
using Polizas.API.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Runtime.InteropServices.WindowsRuntime;
using System.Threading.Tasks;

namespace Polizas.API.Repositories
{
    public class AuthRepository : IAuthRepository
    {

        private readonly DataContext _context;

        public async Task<User> Login(string username, string password)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.UserName == username);

            if(user == null)
            {
                return null;
            }

            return user;
        }
    }
}
