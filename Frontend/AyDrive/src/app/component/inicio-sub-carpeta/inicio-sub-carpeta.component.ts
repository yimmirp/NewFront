import { Component, OnInit } from '@angular/core';

import { CarpetasService } from '../../service/carpetas.service';

import {Archivo} from '../../models/carpeta';

import {ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-inicio-sub-carpeta',
  templateUrl: './inicio-sub-carpeta.component.html',
  styleUrls: ['./inicio-sub-carpeta.component.css']
})
export class InicioSubCarpetaComponent implements OnInit {

  ruta:string = '1';

  carpeta = {
    nickname: 'mdmata'
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

}
