import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 

  constructor() {
 
  }

  setSession(_id:string){
    localStorage.setItem("_id", _id);
  }

  getSession(){
    return localStorage.getItem("_id");
  }

  removeSession(){
    
    localStorage.removeItem('_id');
  }
  



}
