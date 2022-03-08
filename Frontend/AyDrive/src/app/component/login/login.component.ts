import { Component, OnInit } from '@angular/core';

import { UsuariosService, UserLoginBody } from '../../service/registro.service';

import { Router } from '@angular/router';

import {Md5} from 'ts-md5/dist/md5';
import Swal from 'sweetalert2';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { AuthService } from '../../service/auth.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  session:any;


   md5 = new Md5();

  user:UserLoginBody = {
    correoElectronico: '',
    password: ''
  }

  constructor(private usuarioServicio: UsuariosService, private router: Router,
    private authService:AuthService, private location:Location) {
      this.session = authService.getSession();
     }

  ngOnInit(): void {
    if(this.session !== null){
      this.router.navigateByUrl('home',{skipLocationChange:false});
    }
  }

  signUp(){
    this.usuarioServicio.login(this.user)
    .subscribe(
      res => {

        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'success',
          title: res.message
        })

        this.authService.setSession(res._id);
        this.router.navigateByUrl('home');
        //console.log(res);
        

        //   if(res.nickname == this.user.nickname){
        //     
        //   }          
        //   this.router.navigate(['/Inicio'])
        // }else if(res.result == false){
        //   Swal.fire({
        //     icon: 'error',
        //     title: 'Oops...',
        //     text: 'Credenciales incorrectas'
        //   })
        //   this.router.navigate(['/login'])
        // }
      },
      err => {
        //console.log(err.error)
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err.error.message
        })
      }
    )
  }
  

}
