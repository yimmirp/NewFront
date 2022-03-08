import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AirBnB';
  session:any = null;

  constructor(private authService:AuthService, private router:Router, private location:Location){
    
    this.session = this.authService.getSession();
    console.log(this.session);
    
    

  }
  logout(){
    this.authService.removeSession();
    this.router.navigate(['/login']).then(()=>{window.location.reload()});
    // this.router.navigateByUrl("/", { skipLocationChange: true }).then(() => {
    //   console.log(decodeURI(this.location.path()));
    //   this.router.navigate([decodeURI(this.location.path())]);
    //   });
    
      
  }
}
