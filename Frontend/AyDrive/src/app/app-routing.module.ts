import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import {LoginComponent} from './component/login/login.component';
import {RegistroComponent} from './component/registro/registro.component';
import { HomeComponent } from './component/home/home.component';
import { DetailHostComponent } from './component/detail-host/detail-host.component';
import { ProfileComponent } from './component/profile/profile.component';
import { GuestComponent } from './component/guest/guest.component';



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
    path:'detailHost',
    component:DetailHostComponent
  },{
    path:'profile',
    component:ProfileComponent  
  },{
    path:'request',
    component:GuestComponent  
  }
  
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
