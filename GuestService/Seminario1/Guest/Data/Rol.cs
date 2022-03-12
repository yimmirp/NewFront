using System;
using System.Collections.Generic;

namespace Guest.Data
{
    public partial class Rol
    {
        public Rol()
        {
            AsigRols = new HashSet<AsigRol>();
        }

        public int IdRol { get; set; }
        public string NombreRol { get; set; } = null!;

        public virtual ICollection<AsigRol> AsigRols { get; set; }
    }
}
