import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelper, tokenNotExpired } from 'angular2-jwt';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  private _loginUrl = "http://35.154.139.29:8080/AnthurGP/users/login";

  constructor(private http: HttpClient,
    private router: Router) {
  }

  loginUser(user){
    return this.http.post<any>(this._loginUrl,user)
  }

  logout() { 
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

  isLoggedIn() { 
   return tokenNotExpired();
  }





  get currentUser(){
    let token = localStorage.getItem('token');
    if(!token) return null;

    return new JwtHelper().decodeToken(token);
  }

  
}

