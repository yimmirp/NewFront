using Guest.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Guest.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ReservationController : ControllerBase
    {
        private readonly airbnbContext dbContext;

        public ReservationController(airbnbContext dbContext)
        {
            this.dbContext = dbContext;
        }


        [HttpGet("GetLodging/{LodgingId}")]
        public IActionResult GetHost([FromRoute] int LodgingId)
        {

            var Lodging = dbContext.Lodgings.FirstOrDefault(p => p.LodgingId == LodgingId);
            var LodgingPhotos = dbContext.PhotosLodging.Where(p => p.Lodging == Lodging).ToList().Select(p => p.PhotoUrl);
            var LodgingComments = dbContext.Reviews.Where(p => p.Lodging == Lodging).ToList();



            return Ok(new { Lodging, LodgingPhotos, LodgingComments });
        }


        [HttpPost("NewReservation")]
        public IActionResult NewReservation([FromRoute] ModelReservation Reservation) {

            dbContext.Reservations.Add(new Reservation
            {
                 StartDate = Reservation.StartDate,
                 EndDate= Reservation.EndDate,
                 Approved=false, 
                 LodgingId = Reservation.idLodging,
                 UserId = Int32.Parse(Reservation.idUser)
            });
            dbContext.SaveChanges();

            return Ok();

        }
    }

    public class ModelReservation{
        public int idLodging { get; set; }
        public string idUser { get; set; }
        public string StartDate { get; set; }
        public string EndDate { get; set; }
    }
}
