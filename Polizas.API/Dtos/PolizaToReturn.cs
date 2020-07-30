using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Polizas.API.Dtos
{
    public class PolizaToReturn
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public string Descripcion { get; set; }
        public int Cobertura { get; set; }
        public DateTime Vigencia { get; set; }
        public int PeriodoMeses { get; set; }
        public float Precio { get; set; }
        public TipoRiesgo TipoRiesgo { get; set; }
        public bool Status { get; set; }
        public DateTime Created { get; set; }


        public PolizaToReturn()
        {
            Created = DateTime.Now;
        }

    }

    public enum TipoRiesgo
    {
        bajo,
        medio,
        medio_alto,
        alto
    }

    
}
