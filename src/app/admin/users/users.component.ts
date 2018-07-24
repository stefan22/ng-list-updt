import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from "../../services/users.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
 
})
export class UsersComponent implements OnInit {
  @Input()
  count: number;
  allUsers: any = this.getAllUsersCount();
  
  constructor(private users: UsersService) { }

  ngOnInit() {
    this.allUsers = this.users.getAllUsers(); 
    console.log(this.allUsers);
  }

  getAllUsersCount() {
    this.allUsers = this.users.getAllUsers();
    console.log(this.allUsers);
    return this.allUsers;
  }

  getCount() {
    this.count = this.allUsers.length;
    return this.count;
  }

}
