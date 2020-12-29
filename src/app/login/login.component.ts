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

 


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private toastr:ToastrService){  }    




 
 

  signIn(credentials) {
    this.authService.login(credentials)
      .subscribe(result => { 
        if (result){
          let returnUrl = this.route.snapshot.queryParamMap
          .get('returnUrl');
          this.router.navigate([returnUrl || '/']);
        }
        else  
        this.toastr.error('Invalid Username Or Password');
      });
  }
  

  
}