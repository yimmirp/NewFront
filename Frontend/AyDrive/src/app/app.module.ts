import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { RegistroComponent } from './component/registro/registro.component';


import { InicioComponent } from './component/inicio/inicio.component';
import { CarpetaComponent } from './component/carpeta/carpeta.component';
import { CrearCarpetaComponent } from './component/crear-carpeta/crear-carpeta.component';

import { MatInputModule } from '@angular/material/input';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { MatCardModule} from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatTableModule} from '@angular/material/table';
import { MatIconModule} from '@angular/material/icon'; 
import { MatBadgeModule} from '@angular/material/badge';
import { MatDatepickerModule} from '@angular/material/datepicker'; 
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule} from '@angular/material/select';
import { SubcarpetaComponent } from './component/subcarpeta/subcarpeta.component';
import { PerfilComponent } from './component/perfil/perfil.component';
import { ActualizarperfilComponent } from './component/actualizarperfil/actualizarperfil.component';
import { InicioSubCarpetaComponent } from './component/inicio-sub-carpeta/inicio-sub-carpeta.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    InicioComponent,
    CarpetaComponent,
    CrearCarpetaComponent,
    SubcarpetaComponent,
    PerfilComponent,
    ActualizarperfilComponent,
    InicioSubCarpetaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatBadgeModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    SweetAlert2Module,
    BrowserAnimationsModule 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
