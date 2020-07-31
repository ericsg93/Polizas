using Microsoft.EntityFrameworkCore;
using Polizas.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Polizas.API.Repositories
{
    public class UserRepository : IUserRepository
    {
        public readonly DataContext _dataContext;

        public UserRepository(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        public async Task<User> GetUser(int id)
        {
            return await _dataContext.Users.FirstOrDefaultAsync(u => u.Id == id);


        }

        public async Task<IEnumerable<User>> GetUsers()
        {
            return await _dataContext.Users.ToListAsync();
        }
    }
}
