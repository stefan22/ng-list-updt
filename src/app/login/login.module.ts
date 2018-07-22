import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';

const loginRoutes: Routes = [
    {
      path: 'login',
      component: LoginComponent,
    },
    {
      path: 'password-reset',
      component: PasswordResetComponent 
    }

];


@NgModule({
  declarations: [
    LoginComponent,
    PasswordResetComponent 
  ],

  imports: [
    CommonModule,
    RouterModule.forChild(loginRoutes)

  ]
})
export class LoginModule {}
