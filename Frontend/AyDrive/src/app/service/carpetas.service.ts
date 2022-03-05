import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class CarpetasService {

  API_URL = 'http://127.0.0.1:5000'

  constructor(private http: HttpClient) { }

  carpetaRoot(nickname: string){
    return this.http.get(this.API_URL + '/root/' + nickname);
  }

  
}
