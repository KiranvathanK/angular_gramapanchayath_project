import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { Member } from '../member';
import { UsersService } from '../services/users.service';




@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css']
})
export class UserdataComponent implements OnInit {

  filterString = '';
  filterEmails = '';
  filterIds='';
  apiNameList: Member[]=[];
  filteredUsers: Member[]=[];
  subscription?: Subscription;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.serveUsers();
  }



  serveUsers() {
    this.subscription = this.usersService.serveUsers()
      .subscribe(users => this.apiNameList = users);
  }

  getFilteredUsers() {
    this.filteredUsers = this.apiNameList.filter(user => user.name.toLowerCase().indexOf(this.filterString.toLowerCase()) > -1);
  }
  getFilterByMail() {
    this.filteredUsers = this.apiNameList.filter(user => user.email.toLowerCase().indexOf(this. filterEmails.toLowerCase()) > -1);
  }
  getFilterById() {
    this.filteredUsers = this.apiNameList.filter(user => user.id.toLowerCase().indexOf(this.filterString.toLowerCase()) > -1);
  }
  ngOnDestroy() {
    this.subscription && this.subscription.unsubscribe();
  }

}