using Microsoft.AspNetCore.Identity;
using Newtonsoft.Json;
using Polizas.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Polizas.API.Repositories
{
    public class Seed
    {
        public static void SeedUsers(UserManager<User> userManager)
        {
            if (!userManager.Users.Any())
            {
                var userData = System.IO.File.ReadAllText("Repositories/UsersData.json");
                var users = JsonConvert.DeserializeObject<List<User>>(userData);

                foreach(var user in users)
                {
                    userManager.CreateAsync(user, "password").Wait();
                }

            }
        }
    }
}
