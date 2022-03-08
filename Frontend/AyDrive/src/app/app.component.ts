import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AirBnB';
  session:any ;

  constructor(private authService:AuthService){
    this.session = this.authService.getSession();
    console.log(this.session);

  }
}
