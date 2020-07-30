using AutoMapper;
using Polizas.API.Dtos;
using Polizas.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Polizas.API.Helpers
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
           
            CreateMap<Poliza, PolizaToReturn>();
            CreateMap<PolizaForUpdate, Poliza>();
        }

    }
}
