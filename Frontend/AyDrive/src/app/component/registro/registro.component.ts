import { Component, OnInit, HostBinding } from '@angular/core';

import { UsuariosService } from '../../service/registro.service';

import {Usuario} from '../../models/usuarios';

import { Router } from '@angular/router';

import {Md5} from 'ts-md5/dist/md5';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  md5 = new Md5();

  usuario: Usuario = {
    nombre:'',
    apellido:'',
    correoElectronico:'',
    password:'',
    celular: 0,
    fechanac:new Date(),
    foto:'',
    extension:'',
    dpi:0,
    direccion:'',
    roles:[],
    esNormal:true
  }

  constructor(private usuarioService: UsuariosService, private router: Router) { }

  selected:string = '0';
  selected2:string = '0';


  ngOnInit(): void {
  }

  valor1=0;
  valor2=0;
  resultado=0;

  sumar() {
    this.resultado = this.valor1 + this.valor2;
  }

  Save(){

    console.log(this.usuario);

    // this.md5.appendStr(this.usuario.password).end()
    // this.usuarioService.AgregarUsuarios(this.usuario)
    //   .subscribe(
    //     res => {
    //       console.log(res)
    //       this.router.navigate(['/login'])
    //     },
    //     err => console.error(err)
    //   )
  };

}
