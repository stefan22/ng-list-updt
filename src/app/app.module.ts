import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavComponent } from "./nav/nav.component";
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { OutletComponent } from './outlet/outlet.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { NotFoundComponent } from './404/404.component';


const routes: Routes = [
  {
    path: "",
    component: OutletComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "password-reset",
    component: PasswordResetComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    OutletComponent,
    NavComponent,
    LoginComponent,
    PasswordResetComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  
  ],
  exports: [
    //RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
