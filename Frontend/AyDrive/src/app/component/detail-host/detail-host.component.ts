import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';
@Component({
  selector: 'app-detail-host',
  templateUrl: './detail-host.component.html',
  styleUrls: ['./detail-host.component.css']
})
export class DetailHostComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  hostName = 'Casa en la playa'

  host = {
    properties: [
      {
        name: 'Camas',
        value: '2 camas individuales',
        icon: 'bed'
      },
      {
        name: 'Camas',
        value: '2 camas individuales',
        icon: 'bed'
      },
      {
        name: 'Camas',
        value: '2 camas individuales',
        icon: 'bed'
      },
      {
        name: 'Camas',
        value: '2 camas individuales',
        icon: 'bed'
      }
    ]
  }

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


  price: number = 500.00;

  images = [
    'https://material.angular.io/assets/img/examples/shiba2.jpg',
    'https://material.angular.io/assets/img/examples/shiba2.jpg',
    'https://material.angular.io/assets/img/examples/shiba2.jpg'
  ];

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

}
