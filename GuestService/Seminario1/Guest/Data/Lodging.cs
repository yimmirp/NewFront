using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace Guest.Data
{
    public partial class Lodging
    {
        public Lodging()
        {
            Reservations = new HashSet<Reservation>();
            Reviews = new HashSet<Review>();
        }

        public int LodgingId { get; set; }
        public int? Rooms { get; set; }
        public int? Guests { get; set; }
        public int? Beds { get; set; }
        public int? Bathrooms { get; set; }
        public string? Description { get; set; }
        public bool? NeedsApproval { get; set; }
        public int? TotalReviews { get; set; }
        public int? OverallReview { get; set; }
        public int? IdUser { get; set; }
        public string? Services { get; set; }
        public bool? Active { get; set; }

        
        public decimal Price { get; set; }

        public virtual User? IdUserNavigation { get; set; }
        public virtual ICollection<Reservation> Reservations { get; set; }
        public virtual ICollection<Review> Reviews { get; set; }
        [JsonIgnore]
        public virtual ICollection<PhotosLodging> PhothosList { get; set; }
    }
}
