import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { UsersService } from '../services/users.service';
import { Observable, Subscription,combineLatest  } from 'rxjs';
import { Member } from '../member';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'propertytax',
  templateUrl: './propertytax.component.html',
  styleUrls: ['./propertytax.component.css']
})
export class PropertytaxComponent implements OnInit {
filterPropertyids = '';
filterPreviousbals = '';
filterOwners ='';
filterTotalbals = '';
apiNameList: Member[]=[];
filteredUsers: Member[]=[];
subscription?: Subscription;

  constructor(private httpClient:HttpClient,
   private route: ActivatedRoute,
   private authService:AuthService,
   private usersService: UsersService) { 
    
   }
   ngOnInit() {
    this.serveUsers();
    this.queryParams();
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

  queryParams(){
    this.route.paramMap.subscribe();
    this.route.queryParamMap.subscribe();
    this.usersService.getUsers().subscribe(users =>this.filteredUsers=users);
  }

}

