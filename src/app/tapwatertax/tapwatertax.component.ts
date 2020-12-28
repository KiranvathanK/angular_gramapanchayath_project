import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Member } from '../member';
import { AuthService } from '../services/auth.service';
import { UsersService } from '../services/users.service';


@Component({
  selector: 'app-tapwatertax',
  templateUrl: './tapwatertax.component.html',
  styleUrls: ['./tapwatertax.component.css']
})
export class TapwatertaxComponent implements OnInit {
posts:any[]= [];
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

    httpClient.get<any>("https://jsonplaceholder.typicode.com/users")
    .subscribe(response =>{
      this.posts = response;
    });
    
   }
   ngOnInit() {
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



