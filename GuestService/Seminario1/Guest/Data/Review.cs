using System;
using System.Collections.Generic;

namespace Guest.Data
{
    public partial class Review
    {
        public int ReviewId { get; set; }
        public string? Comment { get; set; }
        public int? Cleanlines { get; set; }
        public int? Comunication { get; set; }
        public int? Location { get; set; }
        public int? SecurityReview { get; set; }
        public int? ReservationId { get; set; }
        public int? LodgingId { get; set; }
        public int? UserId { get; set; }

        public virtual Lodging? Lodging { get; set; }
        public virtual Reservation? Reservation { get; set; }
        public virtual User? User { get; set; }
    }
}
