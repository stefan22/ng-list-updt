import { Injectable } from '@angular/core';



@Injectable()
export class UsersService {
  allUsers: any = [];
  
 
  constructor() {
   
  }



  // onUserReset() {
  //   this.addUserForm.reset();
  // }

  // onAddUserSubmit() {
  //   let user = {};
  //   user = this.addUserForm.value;
  //   console.log(user);
  //   this.allUsers.push(user);
  //   this.getAllUsers();

  // } // onAddUserSubmit


  addUser(user) {
    user = user || {};
    this.allUsers.push(user);
    //console.log(this.allUsers);
    return this.allUsers;
  }

  
  getAllUsers() {
    //console.log(this.allUsers);
    return this.allUsers;
  }





}// UsersService class
