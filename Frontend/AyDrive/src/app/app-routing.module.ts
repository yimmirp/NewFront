import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import {LoginComponent} from './component/login/login.component';
import {RegistroComponent} from './component/registro/registro.component';
import { HomeComponent } from './component/home/home.component';



const routes: Routes = [
  {
    path:'',
    redirectTo: 'home',
    pathMatch: 'full'
   
  },
  
  {
    path: 'registro',
    component: RegistroComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },{
    path:'home',
    component:HomeComponent
  }
  
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
