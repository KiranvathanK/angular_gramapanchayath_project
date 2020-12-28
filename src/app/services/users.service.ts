import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Member } from '../member';



@Injectable()
export class UsersService {

  apiUrl = "https://jsonplaceholder.typicode.com/users";

  constructor(private http: HttpClient) { }

  serveUsers(): Observable<Member[]> {
    return this.http.get(this.apiUrl)
      .pipe(
        map((users: any) => {
          return users.map(user => { 
            return {
              id: user.id,
              name: user.name, 
              email: user.email, 
              value: user.address.street 
            }
          })
        })
      );
  }
  getUsers() {
    return this.http.get(this.apiUrl)
      .pipe(
        map((users: any) => users.map(user => ({ ...user, status: (user.id % 2 === 0)})) )
      )
  }

}

