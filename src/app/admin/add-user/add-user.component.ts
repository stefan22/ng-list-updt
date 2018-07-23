import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';
import { UsersService } from '../../services/users.service';


@Component({
  selector: "app-add-user",
  templateUrl: "./add-user.component.html",
  styleUrls: ["./add-user.component.css"]
})
export class AddUserComponent implements OnInit {
  allUsers: any = [];

  addUserForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private users: UsersService) {
    this.buildUserForm();
  }

  ngOnInit() {
    
  }

  buildUserForm() {
    this.addUserForm = this.formBuilder.group({
      userName: this.formBuilder.control(null),
      userPassword: this.formBuilder.control(null),
      userEmail: this.formBuilder.control(null),
      userPrivileges: this.formBuilder.group({
        read: this.formBuilder.control("read"),
        write: this.formBuilder.control(null)
      })
    });
  } // buildForm

  onAddUserSubmit() {
    let user = {};
    user = this.addUserForm.value;
    this.users.addUser(user);
    
    

  } // onAddUserSubmit







}// AddUserComponent
