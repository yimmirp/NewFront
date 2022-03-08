import { Component, OnInit, HostBinding, Input, Output } from '@angular/core';

import { UsuariosService } from '../../service/registro.service';

import { Usuario} from '../../models/usuarios';

import { Rol } from '../../models/rol';

import { Router } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {Md5} from 'ts-md5/dist/md5';
import Swal from 'sweetalert2';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  // @HostBinding('class') classes = 'row';

  form:FormGroup;
  private base64:any = null;
  Archivo:string = '';


  md5 = new Md5();

   roles:Rol[] = [];

  usuario: Usuario = {
    nombre:'',
    apellido:'',
    correoElectronico:'',
    password:'',
    foto:'',
    extension:'',
    roles:[],
    esNormal:true
  }

  constructor(private usuarioService: UsuariosService, 
    private router: Router,
    private fb:FormBuilder) {
      this.getRoles();  
      this.form = this.fb.group({
        nombre:[null, Validators.required  ],
        apellido:[null, Validators.required  ],
        correoElectronico:[null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
        password:[null, Validators.required],
        celular:[null ],
        fechanac:[null],
        dpi:[null],
        direccion:[null],
        roles:[null, Validators.required]
      });
     }

  selected:Rol = {_id:"" , nombreRol:"", nombres:[]};

  ngOnInit(): void {
    
  }

  getRoles(){
    this.usuarioService.getRoles()
    .subscribe(res=>{
      this.roles=res;
      console.log(res);
    },
    error=>console.error(error)
    )
  }

  

  Save(){
    console.log(this.selected);
    this.usuario.roles.push(this.selected._id);
    console.log(this.usuario);
    this.usuarioService.AgregarUsuarios(this.usuario).
    subscribe(res =>{
      console.log(res);
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
        title: 'Usuario registrado'
      })

      this.router.navigate(['/login'])

    },
    error =>{
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
        title: error.error.message
      })


    });

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

 onFileSelect(event:any){
   const file:File = event.target.files[0];
   if(file){
      this.usuario.extension = file.name;
     // this.base64 = event.target.fiiles[0];
      const reader = new FileReader();
      reader.onload = this.handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
     
   }
 }

 
 handleReaderLoaded(e:any) {
  this.usuario.foto = btoa(e.target.result);
  let splitted = this.usuario.extension.split(".", 2); 
  this.usuario.extension = splitted[1];
}

 
}
