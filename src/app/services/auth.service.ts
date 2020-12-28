import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { JwtHelper, tokenNotExpired } from 'angular2-jwt';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  constructor(private http: Http) {
  }

  login(credentials) { 
   return this.http.post('/api/authenticate', 
      JSON.stringify(credentials))
      .map(response =>{
      let result = response.json();
      if(result && result.token){
        localStorage.setItem('token',result.token);
        return true;
      }
      return false;
  });
}

  logout() { 
    localStorage.removeItem('token');
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

