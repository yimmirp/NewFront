import { Injectable } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 

  constructor(private cookies:CookieService ) {
 
  }

  setSession(_id:string){
    this.cookies.set("_id", _id);
  }

  getSession(){
    return this.cookies.get("_id");
  }

  



}
