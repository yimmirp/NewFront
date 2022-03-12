using System;
using System.Collections.Generic;

namespace Guest.Data
{
    public partial class AsigRol
    {
        public int IdAsigRol { get; set; }
        public int IdRol { get; set; }
        public int IdUser { get; set; }

        public virtual Rol IdRolNavigation { get; set; } = null!;
        public virtual User IdUserNavigation { get; set; } = null!;
    }
}
