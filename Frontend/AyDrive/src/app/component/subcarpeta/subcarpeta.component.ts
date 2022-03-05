import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Archivo } from 'src/app/models/carpeta';
import { Carpeta } from 'src/app/models/carpeta';
import { CarpetaService } from 'src/app/service/carpeta.service';
import { FilesService } from 'src/app/service/files.service';

import {CrearFile} from '../../models/files'

import Swal from 'sweetalert2';

import {MoverFile, EliminarFile,new_Nombre} from '../../models/files'

export class Directory{
  private files: Archivo[];
  private folders: Carpeta[];
  constructor(files:Archivo[], folders:Carpeta[]){
    this.files= files;
    this.folders = folders;
  }
}

@Component({
  selector: 'app-subcarpeta',
  templateUrl: './subcarpeta.component.html',
  styleUrls: ['./subcarpeta.component.css']
})
export class SubcarpetaComponent implements OnInit {

  directorios:Carpeta[] = [];
  archivos:Archivo[] = [];
  directorio:Carpeta ;
  archivo:Archivo;
  archivoNuevo:any;
  oldname:string = '';
  carpeta = "";
  nombreC = "";
  Archivo:any= '';
  fileName = '';
  base64: any;
  extend:string = ''; 
    
  userlog:any;
  constructor(private carpetaservice:CarpetaService, private fileServices: FilesService,
    
    private route:ActivatedRoute,
    private location:Location,
    private router:Router) {
    this.userlog = localStorage.getItem('nickname');
    if(!this.userlog){
      this.router.navigateByUrl('login');
    }
    this.directorio = {nombre: '', id:0, fecha_creacion: new Date(), usuario:this.userlog, total_archivos:0};
    this.archivo = {archivo:'', fecha_subida:new Date(), link:'', id:0, id_carpeta:0, extension:''};
    this.carpeta = String(localStorage.getItem('nombre_carpeta'));
  }



  ngOnInit(): void {
    

    this.getCarpetas();
    
  }

  FileCarpeta: CrearFile = {
    nickname: '',
    archivo: '',
    extension: '',
    base64: '',
    idcarpeta: 0
  }


  getCarpetas(){
    

    this.fileServices.getFiles(String(localStorage.getItem('nickname')),String(localStorage.getItem('nombre_carpeta')))
    .subscribe((res:any)=>{
      console.log(res);
      this.archivos = res.files;
      
    });

  }

  new_Name: new_Nombre ={
    new_name: '',
    file_id: 0
  }

  guardarFile(archivo: Archivo){
    console.log(localStorage.getItem('nombre_file'));
    console.log(archivo.id);
    console.log(this.directorio.nombre);

    this.new_Name.new_name = this.directorio.nombre;
    this.new_Name.file_id = archivo.id;

    if(this.new_Name.new_name != ''){
      this.fileServices.actualizarFile(this.new_Name)
      .subscribe(
        res => {
          
            console.log(res),
            this.router.navigateByUrl('/Inicio');
          
        },
        err => console.log(err)
      )
    }else{
      alert('ingresa el nombre primero.');
    }

    
  }
  

  setCarpeta(carpeta:Carpeta){
    this.oldname = carpeta.nombre;
    this.directorio = carpeta;
  }

  guardarCarpeta(){
    if(!this.directorio.id){
      
      if(this.archivo.id > 0){
        console.log(this.archivo);
      }else{
        if(this.directorio.nombre !== ''){
          
          const tempCarpeta = {nickname: this.directorio.usuario, carpeta:this.directorio.nombre};
          this.carpetaservice.setDirectory(tempCarpeta)
          .subscribe( (res)=>{
            console.log(res);
            this.directorios.push(this.directorio);
            this.clearDirectorio();

          });

        }else {
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
            icon: 'error',
            title: 'Error: Campo nombre de carpeta vacio'
          })
          
        }
      }

    }else{

      const tmpCarpeta = {nickname:this.directorio.usuario, oldname:this.oldname, newname:this.directorio.nombre};
      this.carpetaservice.updateDirectory(tmpCarpeta).
      subscribe(res =>{
        console.log(res);
        this.clearDirectorio();
        
      });


    }
  }

  clearDirectorio(){
    this.directorio = {nombre: '', id:0, fecha_creacion: new Date(), usuario:this.userlog, total_archivos:0};
  }

  clearArchivo(){
    this.archivo = {archivo:'', fecha_subida:new Date(), link:'', id:0, id_carpeta:0, extension:''};
  }

  deleteDirectory(carpeta:Carpeta){
    Swal.fire({
      title: 'Desea eliminar la carpeta?',
      text: 'Este proceso es irreversible',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Eliminar.',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Eliminado!',
          'La carpeta ha sido eliminada.',
          'success'
        ).then(()=>{
          this.carpetaservice.deleteDirectory({nickname:carpeta.usuario, carpeta:carpeta.nombre})
          .subscribe(res=>{
            console.log(res);
            this.directorios = this.directorios.filter(dir => dir !== carpeta);
          });

        })
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'La carpeta no ha sido eliminada',
          'error'
        )
      }
    }) 
    
    
  }

  alertConfirmation(directorio:Carpeta){
    Swal.fire({
      title: '<strong>Propiedades</strong>',
      icon: 'info',
      html:
        '<table>'+
          '<tr>'+
            '<td>'+
            'NOMBRE'+
            '</td>'+  
            '<td>'+
            directorio.nombre+
            '</td>'+ 
          '</tr>'+
          '<tr>'+
            '<td>'+
            'FECHA CREACION'+
            '</td>'+  
            '<td>'+
            directorio.fecha_creacion+
            '</td>'+ 
          '</tr>'+
          '<tr>'+
            '<td>'+
            'NUMERO DE ARCHIVOS'+
            '</td>'+  
            '<td>'+
              directorio.total_archivos+
            '</td>'+ 
          '</tr>'+
        '</table> ',
      showCloseButton: true,
      showConfirmButton:false,
      showCancelButton: false,
      focusConfirm: false,
      
    })
    
  }

  getProperties(archivo:Archivo){
    Swal.fire({
      title: '<strong>Propiedades</strong>',
      icon: 'info',
      html:
        '<table>'+
          '<tr>'+
            '<td>'+
            'NOMBRE'+
            '</td>'+  
            '<td>'+
            archivo.archivo+
            '</td>'+ 
          '</tr>'+
          '<tr>'+
            '<td>'+
            'EXTENSION'+
            '</td>'+  
            '<td>'+
            archivo.extension+
            '</td>'+ 
          '</tr>'+
          '<tr>'+
            '<td>'+
            'FECHA CREACION'+
            '</td>'+  
            '<td>'+
            archivo.fecha_subida+
            '</td>'+ 
          '</tr>'+
          '<tr>'+
            '<td>'+
            'LINK'+
            '</td>'+  
            '<td>'+
              archivo.link+
            '</td>'+ 
          '</tr>'+
        '</table> ',
      showCloseButton: true,
      showConfirmButton:false,
      showCancelButton: false,
      focusConfirm: false,
      
    })
  }

  setArchivo(archivo:Archivo){
    this.directorio.nombre = archivo.archivo;
    this.archivo = archivo;
  }

  file_s: MoverFile = {
    nickname: '',
    new_folder: '',
    file_id: 0
  }
  

  mover(archivo:Archivo){
    this.file_s.nickname = String(localStorage.getItem('nickname'));
    this.file_s.new_folder = this.nombreC;
    this.file_s.file_id = archivo.id;

    if(this.nombreC != ''){
      this.fileServices.MoverFile(this.file_s).subscribe(
        res =>{
         console.log(res)
         this.router.navigateByUrl('subcarpeta');
        },
        err => console.error(err)
      )
    }else {
      alert('Seleccione una carpeta!');
    }
    
    console.log(this.file_s);
  }
  

  Eliminar_f: EliminarFile = {
    nickname: '',
    folder: '',
    filename: '',
    root: 0,
  }

  eliminar(archivo:Archivo,root: number,carpeta: string){
    if(root == 0){
      this.Eliminar_f.folder = String(localStorage.getItem('nombre_carpeta'));
      this.Eliminar_f.nickname = String(localStorage.getItem('nickname'));
      this.Eliminar_f.filename = archivo.archivo;
      this.Eliminar_f.root = root;
      
      this.fileServices.EliminarFile(this.Eliminar_f).subscribe(
        res => {
          console.log(res)
          this.router.navigate(['/Inicio'])
        },
        err =>  console.log(err)
      )
    }
  }

  onFileSelect(event:any){
    const file:File = event.target.files[0];
    if (file) {
        this.FileCarpeta.archivo = file.name;
        this.base64 = event.target.files[0]
        const reader = new FileReader();
        reader.onload = this.handleReaderLoaded.bind(this);
        reader.readAsBinaryString(file);
    }
  }


  handleReaderLoaded(e:any) {
    this.Archivo = btoa(e.target.result);
    let splitted = this.FileCarpeta.archivo.split(".", 2); 
    this.extend = splitted[1];
  }


  CrearFile(){

    this.FileCarpeta.nickname = String(localStorage.getItem('nickname'));
    this.FileCarpeta.archivo = this.directorio.nombre;
    this.FileCarpeta.extension = this.extend;
    this.FileCarpeta.base64 = this.Archivo;
    this.FileCarpeta.idcarpeta = Number(localStorage.getItem('id_carpeta'));
    

    console.log(this.FileCarpeta.nickname);
    console.log(this.FileCarpeta.archivo);
    console.log(this.FileCarpeta.extension);
    console.log(this.FileCarpeta.base64);
    console.log(this.FileCarpeta.idcarpeta);
    
    this.fileServices.crearfile(this.FileCarpeta)
      .subscribe(
        res=>{
          console.log(res)
        },
        err => console.log(err)
      )
  }
}

