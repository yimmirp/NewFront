import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {MoverFile,EliminarFile,new_Nombre,CrearfileRoot,CrearFile} from '../models/files'

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  API_URL = 'http://127.0.0.1:5000'
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', mode:'cors' })
  };
  

  constructor(private http:HttpClient) { }

  MoverFile(mover: MoverFile){
    return this.http.post(`${this.API_URL}/movefile`, mover)
  }

  EliminarFile(eliminar: EliminarFile){
    return this.http.post(`${this.API_URL}/deletefile`, eliminar)
  }

  getFiles(nickname:string, folder: string){
    return this.http.get(`${this.API_URL}/folders/${nickname}/${folder}`);
  }

  actualizarFile(uptdate_nombre: new_Nombre){
    return this.http.put(`${this.API_URL}/updatefile`, uptdate_nombre)
  }

  crearfileRoot(fileRoot: CrearfileRoot){
    return this.http.post(`${this.API_URL}/file`, fileRoot)
  }

  crearfile(fileNormal: CrearFile){
    return this.http.post(`${this.API_URL}/file`, fileNormal)
  }

}
