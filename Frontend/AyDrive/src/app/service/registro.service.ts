import { Injectable } from '@angular/core';
import  { HttpClient} from '@angular/common/http'

import {UrlService} from '../service/url.service';
import {Usuario,Update} from '../models/usuarios'




export interface UserLoginBody {
  correoElectronico: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})


export class UsuariosService {

  
  API_URL = 'HOLA';
 

  constructor(private http: HttpClient, private urlService:UrlService) { }

  /*
  login(userloginBody: UserLoginBody): Promise<any> {
    const path = '/login';
    return new Promise((resolve, reject) => {
      this.http.post(this.API_URL + path, userloginBody)
        .toPromise()
        .then((res: BaseResponse) => {
          //console.log(userloginBody);
          //console.log(res);
           resolve(res);
        }).catch((err) => {
          reject(err.error.message);
        });
    });
  }
 */

  login(user: UserLoginBody){
    return this.http.post<any>(`${this.urlService.URL_GET}/login`, user);
  }
  

  getUsuarios(){
     return this.http.get(`${this.urlService.URL_GET}/users`);
  }

  getRoles(){
    return this.http.get(`${this.urlService.URL_GET}/roles`);
  }

  getUpdate(nickname: string){
    return this.http.get(`${this.API_URL}/users/${nickname}`)
  }

  UpdateUsuario(nickname: string, updateUsuario: Update) {
    return this.http.post(`${this.API_URL}/users/${nickname}`, updateUsuario);
  }

  AgregarUsuarios(usuario: Usuario){
    return this.http.post(`${this.API_URL}/users`, usuario);
  }

  eliminarUsurio(id: string){
    return this.http.delete(`${this.API_URL}/delete/${id}`);
  }

  
}

export interface BaseResponse {
  text: string;
  id_usuario: string;
}




