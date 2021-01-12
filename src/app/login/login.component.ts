import { Component, Input} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

 loginUserData = {}


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private toastr:ToastrService){  }    




 
 

 
  
  loginUser(user){
    this.authService.loginUser(this.loginUserData)
    .subscribe(
      res => console.log(res),
      err => this.toastr.error('Invalid Username Or Password')
    )
  }

  
}