import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Services } from 'src/app/models/services';
import { AuthService } from 'src/app/service/auth.service';
import { GuestService } from 'src/app/service/guest.service';
import { SwiperOptions } from 'swiper';
import { NewReservationModalComponent } from '../dialogs/new-reservation-modal/new-reservation-modal.component';
@Component({
  selector: 'app-detail-host',
  templateUrl: './detail-host.component.html',
  styleUrls: ['./detail-host.component.css']
})
export class DetailHostComponent implements OnInit {

  constructor(private route: ActivatedRoute,private Guest:GuestService,public dialog: MatDialog,
    private auth:AuthService) {
    

   }

  ngOnInit(): void {

    this.auth.setSession("1")
    this.route.paramMap.subscribe(params=>{
      if(params.has("id")){
        console.log(params.get("id"))
        this.Guest.GetLodging(Number(params.get("id"))).subscribe((res:any) => {
          this.idLodging=Number(params.get("id"))
          console.log(res)
          this.images = res["lodgingPhotos"].slice();
          this.hostName = res["lodging"]["description"]
          this.price = res["lodging"]["price"]
          this.properties.push({
            name: 'Cuartos',
            value: res["lodging"]["rooms"]+' cuartos',
            icon: 'meeting_room'
          })

          this.properties.push({
            name: 'Camas',
            value: res["lodging"]["beds"]+' camas individuales',
            icon: 'bed'
          })

          this.properties.push({
            name: 'Baños',
            value: res["lodging"]["bathrooms"]+' baños',
            icon: 'bathroom'
          })

          this.properties.push({
            name: 'Invitados',
            value: res["lodging"]["guests"],
            icon: 'supervisor_account'
          })

          this.properties.push({
            name: 'Servicios',
            value: res["lodging"]["services"],
            icon: 'electrical_services'
          })

        })
      }
    })


   
  }

  hostName = 'Casa en la playa'
  idLodging=0
  
  properties:Services[]=[];
 

  comments = [
    {
      userAvatar: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
      userName: 'Usuario de prueba',
      date: '2022-03-09T07:18:35.035Z',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae, porro fugit natus vitae saepe officia numquam odio doloremque tempore molestias labore, quam velit molestiae, minima nostrum dignissimos dolor! Est, iste!'
    },
    {
      userAvatar: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
      userName: 'Otro usuario',
      date: '2022-02-09T07:18:35.035Z',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae, porro fugit natus vitae saepe officia numquam odio doloremque tempore molestias labore, quam velit molestiae, minima nostrum dignissimos dolor! Est, iste!'
    }
  ]


  price: number = 0.00;

  images = [];

  galleryConfig: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 50,
    navigation: true,
    pagination: { clickable: true },
    loop: true
  }

  onSwiper(e: any) {

  }

  slideChange() {

  }

  

  openDialog() {
    this.dialog.open(NewReservationModalComponent,{
        width: '350px',
        data: { 
          idLodging: this.idLodging,
          userId: this.auth.getSession()
        }
    });
  }

}
