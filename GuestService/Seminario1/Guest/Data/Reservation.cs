using System;
using System.Collections.Generic;

namespace Guest.Data
{
    public partial class Reservation
    {
        public Reservation()
        {
            Reviews = new HashSet<Review>();
        }

        public int ReservationId { get; set; }
        public string? StartDate { get; set; }
        public string? EndDate { get; set; }
        public bool? Approved { get; set; }
        public int? LodgingId { get; set; }
        public int? UserId { get; set; }
        public bool? Active { get; set; }

        public virtual Lodging? Lodging { get; set; }
        public virtual User? User { get; set; }
        public virtual ICollection<Review> Reviews { get; set; }
    }
}
