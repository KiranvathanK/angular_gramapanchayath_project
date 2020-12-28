import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { UsersService } from '../services/users.service';
import { Subscription } from 'rxjs';
import { Member } from '../member';


@Component({
  selector: 'propertytax',
  templateUrl: './propertytax.component.html',
  styleUrls: ['./propertytax.component.css']
})
export class PropertytaxComponent implements OnInit {

users:Member[]= [];
filterPropertyids = '';
filterPreviousbals = '';
filterOwners ='';
filterTotalbals = '';
apiNameList: Member[]=[];
filteredUsers: Member[]=[];
subscription?: Subscription;

  constructor(private httpClient:HttpClient,
   private authService:AuthService,
   private usersService: UsersService) { 
    
   }
   ngOnInit() {
     this.httpClient.get<any>('https://jsonplaceholder.typicode.com/users')
     .subscribe(response => {
       this.users = response;
     })
    this.serveUsers();
  }



  serveUsers() {
    this.subscription = this.usersService.serveUsers()
      .subscribe(users => this.apiNameList = users);
  }

  getFilterPropertyIds() {
    this.filteredUsers = this.apiNameList.filter(user => user.id.toString().toLowerCase().indexOf(this.filterPropertyids.toLowerCase()) > -1);
  }
  getFilterPreviousBal() {
    this.filteredUsers = this.apiNameList.filter(user => user.id.toString().toLowerCase().indexOf(this. filterPreviousbals.toLowerCase()) > -1);
  }
  getFilterOwners() {
    this.filteredUsers = this.apiNameList.filter(user => user.name.toLowerCase().indexOf(this.filterOwners.toLowerCase()) > -1);
  }
  getFilterTotalBal() {
    this.filteredUsers = this.apiNameList.filter(user => user.id.toString().toLowerCase().indexOf(this.filterTotalbals.toLowerCase()) > -1);
  }
  ngOnDestroy() {
    this.subscription && this.subscription.unsubscribe();
  }

}

