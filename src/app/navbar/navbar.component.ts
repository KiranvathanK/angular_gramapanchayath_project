import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  constructor(
    private route:ActivatedRoute,
    private authService:AuthService) { }

  

  ngOnInit(){
    this.route.paramMap.subscribe(params =>{
      console.log(params.get('id'));
    })
  }

}