import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  userName = 'Yimmi Pernillo'
  userAge = 23
  userPhoto = 'https://material.angular.io/assets/img/examples/shiba2.jpg'
  dataSource = [
    { id: 1, name: 'Prueba', other: 'Otro campo' },
    { id: 2, name: 'Prueba', other: 'Otro campo' },
    { id: 3, name: 'Prueba', other: 'Otro campo' },
    { id: 4, name: 'Prueba', other: 'Otro campo' }
  ]
  displayedColumns: string[] = ['id', 'name', 'other']
}
