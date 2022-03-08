import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  session:any;
  constructor(private authService:AuthService, private router:Router, private _location:Location) { 
    this.session = authService.getSession();
  }

  ngOnInit(): void {
    if(this.session == null){
       this.router.navigateByUrl('login');


    }
  }

}
