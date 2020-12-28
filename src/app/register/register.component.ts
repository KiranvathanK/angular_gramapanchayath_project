import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  water:string="assets/images/water.png";
  tree:string="assets/images/tree.png";

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

}
