import { Component, Input} from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';



@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  water:string="assets/images/water.png";
  tree:string="assets/images/tree.png";
  invalidLogin:any;

 


  constructor(
    private router: Router, 
    private authService: AuthService,
    private toastr:ToastrService){  }    




 
 

  signIn(credentials) {
    this.authService.login(credentials)
      .subscribe(result => { 
        if (result)
          this.router.navigate(['/home']);
        else  
        this.toastr.error('Invalid Username Or Password');
      });
  }
  

  
}