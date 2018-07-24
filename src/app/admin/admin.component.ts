import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.css"]
})
export class AdminComponent implements OnInit {
  @Input()
  allUsers: any = [];
  count: number = 0;



  constructor(private users: UsersService) {

  }

  ngOnInit() {
    this.allUsers = this.users.getAllUsers();
    //jimmy is default
    this.allUsers = this.allUsers.length;
    this.count = Number(this.allUsers);
    console.log(this.count);
    return this.count;
  }


  getUsersCount() {
    this.allUsers = this.users.getAllUsers();
    this.allUsers = this.allUsers.length;
    this.count = Number(this.allUsers);
    console.log(this.count);
    return this.count;
  }





}// AdminComponent
