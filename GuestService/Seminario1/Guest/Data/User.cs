using System;
using System.Collections.Generic;

namespace Guest.Data
{
    public partial class User
    {
        public User()
        {
            AsigRols = new HashSet<AsigRol>();
            Lodgings = new HashSet<Lodging>();
            Reservations = new HashSet<Reservation>();
            Reviews = new HashSet<Review>();
        }

        public int IdUser { get; set; }
        public string Nombre { get; set; } = null!;
        public string Apellido { get; set; } = null!;
        public string CorreoElectronico { get; set; } = null!;
        public string Password { get; set; } = null!;
        public int? Celular { get; set; }
        public DateOnly? Fechanac { get; set; }
        public string? Foto { get; set; }
        public long? Dpi { get; set; }
        public string? Direccion { get; set; }
        public bool? EsNormal { get; set; }

        public virtual ICollection<AsigRol> AsigRols { get; set; }
        public virtual ICollection<Lodging> Lodgings { get; set; }
        public virtual ICollection<Reservation> Reservations { get; set; }
        public virtual ICollection<Review> Reviews { get; set; }
    }
}
