import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  addUserForm;
  
  usersList: any = [];
  user = {
    name:'',
    email:'',
    password: '',
    permissions: [
      'read'
    ]
  };

  constructor() {}

  ngOnInit() {}

  onAddUser(e,user) {
    var arr = this.usersList;
    e.preventDefault();
    arr.push(user);
    console.log(arr);
    return arr;
  }
}
