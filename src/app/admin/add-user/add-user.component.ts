import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: "app-add-user",
  templateUrl: "./add-user.component.html",
  styleUrls: ["./add-user.component.css"]
})
export class AddUserComponent implements OnInit {
  addUserForm: FormGroup;
  userPriviCtrls: FormArray;

  constructor(private formBuilder: FormBuilder) {
    this.buildUserForm();
  }

  ngOnInit() {}

  buildUserForm() {
    this.addUserForm = this.formBuilder.group({
      userName: this.formBuilder.control(null),
      userPassword: this.formBuilder.control(null),
      userEmail: this.formBuilder.control(null),
      userPrivileges: this.formBuilder.group({
        read: this.formBuilder.control("read"),
        write: this.formBuilder.control(null)
      }),
      userPrivilegesArray: this.formBuilder.array([
        this.formBuilder.control(null)
      ])
    });

    this.userPriviCtrls = this.addUserForm.get(
      "userPrivilegesArray"
    ) as FormArray;
  } // buildForm

  onUserAddPrivileges() {
    this.userPriviCtrls.push(this.formBuilder.control(null));
  }

  onUserRemPrivileges(index) {
    this.userPriviCtrls.removeAt(index);
  }

  onUserReset() {
    this.addUserForm.reset();
  }

  onAddUserSubmit() {
    
    console.log(this.addUserForm.value);
  }
}// AddUserComponent
