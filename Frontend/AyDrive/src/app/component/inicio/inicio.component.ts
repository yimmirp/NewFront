import { Component, OnInit } from '@angular/core';

import { CarpetasService } from '../../service/carpetas.service';

import {Archivo} from '../../models/carpeta';

import {CrearfileRoot} from '../../models/files';

import {ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  ruta:string = '1';

  carpeta = {
    nickname: 'mdmata'
  }

  File: CrearfileRoot = {
    nickname: '',
    archivo: '',
    extension: '',
    base64: ''

  }



  constructor(private carpetaService: CarpetasService, private router: Router, private activeRouter: ActivatedRoute) { }

  ngOnInit(): void {    
    console.log(String(localStorage.getItem('nikname')))
      this.carpetaService.carpetaRoot(String(localStorage.getItem('nickname'))).subscribe(
        
        res => {
          console.log(res)
          if(res != null){
            console.log(res)
          }
        },
        err => console.error(err)
      )
   
    this.checksessionStorage();
  }


  checksessionStorage(){
    if(localStorage.getItem('nickname') == null){ // dashboard atleta
      this.router.navigateByUrl('/login');
    }
  }

  setRuta(ruta:string){
    this.ruta = ruta;
  }



  CrearFile(){
    this.File.nickname = String(localStorage.getItem('nickname'));
    
    
    
    console.log(this.File.nickname);

  }

}
