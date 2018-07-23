import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../services/users.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  allUsers: any = [] = this.users.getAllUsers();

  constructor(private users: UsersService) { }

  ngOnInit() {
    this.allUsers = this.users.getAllUsers(); 
    console.log(this.allUsers);
  }

}
