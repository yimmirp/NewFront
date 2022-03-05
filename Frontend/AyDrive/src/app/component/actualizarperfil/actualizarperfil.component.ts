import { Component, HostBinding, OnInit } from '@angular/core';


import { UsuariosService } from '../../service/registro.service';

import {Update} from '../../models/usuarios';

import {ActivatedRoute, Router } from '@angular/router';


import {Md5} from 'ts-md5/dist/md5';

@Component({
  selector: 'app-actualizarperfil',
  templateUrl: './actualizarperfil.component.html',
  styleUrls: ['./actualizarperfil.component.css']
})
export class ActualizarperfilComponent implements OnInit {

  md5 = new Md5();

  @HostBinding('class') classes = 'row';

  actualizar: Update = {
    correo: '',
    fecha_nacimiento: new Date(),
    password: ''
  }

  
  usuario: any = []


  constructor(private usuarioService: UsuariosService, private router: Router) { }

  ngOnInit(): void {
    this.md5.appendStr(this.actualizar.password).end()
    this.usuarioService.getUpdate(String(localStorage.getItem('nickname'))).subscribe(
      res => {
        this.usuario = res;
        console.log(this.usuario);
        
      },
      err => console.error(err)
    );
  }


  ActualizarInfo() {
    this.usuarioService.UpdateUsuario(String(localStorage.getItem('nickname')), this.actualizar).subscribe(
      res => {
        console.log(res)
        this.router.navigateByUrl('/perfil');
      }, 
      err => console.error(err)
    )
  }

}
