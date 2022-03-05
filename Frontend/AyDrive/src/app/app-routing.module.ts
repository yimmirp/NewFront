import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import {LoginComponent} from './component/login/login.component';
import {RegistroComponent} from './component/registro/registro.component';
import {InicioComponent} from './component/inicio/inicio.component';
import { CarpetaComponent } from './component/carpeta/carpeta.component';
import { CrearCarpetaComponent } from './component/crear-carpeta/crear-carpeta.component';
import { SubcarpetaComponent } from './component/subcarpeta/subcarpeta.component';
import { PerfilComponent } from './component/perfil/perfil.component';
import { ActualizarperfilComponent } from './component/actualizarperfil/actualizarperfil.component';
import { InicioSubCarpetaComponent } from './component/inicio-sub-carpeta/inicio-sub-carpeta.component';


const routes: Routes = [
  {
    path:'',
    redirectTo: 'login',
    pathMatch: 'full'
   
  },
  
  {
    path: 'registro',
    component: RegistroComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
  ,
  {
    path: 'Inicio',
    component: InicioComponent
  },
  {
    path: 'carpetas',
    component: CarpetaComponent
  },
  {
    path: 'crear-carpeta',
    component: CrearCarpetaComponent
  },
  {
    path: 'subcarpeta',
    component: SubcarpetaComponent
  },
  {
    path: 'perfil',
    component: PerfilComponent
  },
  {
    path: 'actualizarPerfil',
    component: ActualizarperfilComponent
  }
  ,
  {
    path: 'InicioSub',
    component: InicioSubCarpetaComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
