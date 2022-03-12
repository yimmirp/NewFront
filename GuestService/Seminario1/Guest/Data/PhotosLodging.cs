using System.ComponentModel.DataAnnotations.Schema;

namespace Guest.Data
{

    [Table("PhotosLodgins")]
    public class PhotosLodging
    {
        public int Id { get; set; }
        public Lodging Lodging { get; set; }
        public string PhotoUrl { get; set; }
    }
}
