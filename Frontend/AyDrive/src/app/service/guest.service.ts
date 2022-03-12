import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { pipe } from 'rxjs';
import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class GuestService {

  constructor(private http: HttpClient, private router: Router) { }

  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  })

  HOST:string="http://localhost:3005/Reservation" 
  //TODO: GET USERS
  GetLodging(LodgingId:number) {
    const url = this.HOST+"/GetLodging/"+LodgingId;
    return this.http.get(url);
  }

  NewResetvation(StartDate:string,EnDate:string,idLodging:number,idUser:string){

      return this.http.post(this.HOST+"/NewReservation",
        {
          "idLodging" :idLodging,
          "idUser":idUser,
          "StartDate":StartDate ,
          "EndDate":EnDate 
        }
        , { headers: this.headers })
        .pipe(map(data => data));
  }
}
