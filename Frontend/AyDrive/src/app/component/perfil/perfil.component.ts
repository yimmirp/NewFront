import { Component, OnInit } from '@angular/core';

import { UsuariosService } from '../../service/registro.service';

import {Usuario} from '../../models/usuarios';

import {ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  usuario: any = []

  constructor(private usuarioService: UsuariosService, private router: Router) { }

  ngOnInit(): void {
    this.usuarioService.getUpdate(String(localStorage.getItem('nickname'))).subscribe(
      res => {
        
        this.usuario = res;
        console.log(this.usuario);
      },
      err => console.error(err)
    );
  }

}
