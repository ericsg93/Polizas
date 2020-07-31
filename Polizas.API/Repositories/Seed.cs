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
        public static void SeedUsers(UserManager<User> userManager, RoleManager<Role> roleManager)
        {
            if (!userManager.Users.Any())
            {
                var userData = System.IO.File.ReadAllText("Repositories/Data/UsersData.json");
                var users = JsonConvert.DeserializeObject<List<User>>(userData);

                var roles = new List<Role>
                {
                    new Role{Name = "Admin"},
                    new Role{Name = "Member"}
                };

                foreach (var role in roles)
                {
                    roleManager.CreateAsync(role).Wait();
                }

                foreach(var user in users)
                {
                    userManager.CreateAsync(user, "password").Wait();
                    userManager.AddToRoleAsync(user, "Member");
                }

                //creacion admin user
                var adminUser = new User
                {
                    UserName = "Admin"
                };

                var result = userManager.CreateAsync(adminUser, "password").Result;

                if (result.Succeeded)
                {
                    var admin = userManager.FindByNameAsync("Admin").Result;
                    userManager.AddToRoleAsync(admin, "Admin");
                }

            }
        }

        public static void SeedPolizas(DataContext dataContext)
        {
            if (!dataContext.Polizas.Any())
            {
                var polizaData = System.IO.File.ReadAllText("Repositories/Data/PolizasData.json");
                var polizas = JsonConvert.DeserializeObject<List<Poliza>>(polizaData);

                foreach (var poliza in polizas)
                {
                    dataContext.Polizas.Add(poliza);
                }

                dataContext.SaveChanges();

            }
        }


    }
}
