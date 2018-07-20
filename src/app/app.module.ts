import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { NavComponent } from './nav/nav.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';

import { LandingComponent } from './landing/landing.component';
import { NotFoundComponent } from './404/404.component';

import { ProductsComponent } from './products/products.component';
import { DetailsComponent } from './details/details.component';

import { HowToComponent } from './how-to/how-to.component';

import { ProductsService } from './services/products.service';
import { AdminComponent } from './admin/admin.component';
import { LoggedInGuard } from './services/logged-in.guard';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { PermissionsComponent } from './permissions/permissions.component';



const appRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'login',
    component: LoginComponent
    // children: [
    //   { path: 'password-reset', component: PasswordResetComponent }
    // ]
  },

  {
    path: 'password-reset',
    component: PasswordResetComponent
  },
  {
    path: 'password-reset',
    component: PasswordResetComponent
  },

  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'how-to',
    component: HowToComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [LoggedInGuard],
    children: [
      {
        path: '', component: UsersComponent
      },
      {
        path: 'user-list', component: UsersComponent
      },
      {
        path: 'add-user', component: AddUserComponent
      },
      {
        path: 'permissions', component: PermissionsComponent
      }
    ]
  },

  {
    path: '**',
    component: NotFoundComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavComponent,
    LoginComponent,
    PasswordResetComponent,
    RegisterComponent,
    NotFoundComponent,
    LandingComponent,
    ProductsComponent,
    DetailsComponent,
    HowToComponent,
    AdminComponent,
    UsersComponent,
    AddUserComponent,
    PermissionsComponent
  ],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(appRoutes)],

  providers: [ProductsService, LoggedInGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
