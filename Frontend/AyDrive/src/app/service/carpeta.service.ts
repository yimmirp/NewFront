import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CarpetaService {
  url:string = 'http://127.0.0.1:5000/'; 
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', mode:'cors' })
  };
  

  constructor(private http:HttpClient) { }

  getDirectoriesRoot(nickname:string){
    return this.http.get(`${this.url}root/${nickname}`);
  }

  setDirectory(carpeta:any){
    return this.http.post(`${this.url}folder`,carpeta);
  }

  updateDirectory(carpeta:any){
    return this.http.put(`${this.url}updatefolder`, carpeta);
  }

  deleteDirectory(carpeta:any){
    return this.http.post(`${this.url}deletefolder`, carpeta);
  }


}
