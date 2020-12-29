import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authService:AuthService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
      this.route.paramMap.subscribe();
      this.route.queryParamMap.subscribe();      
  }

}
