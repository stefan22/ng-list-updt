import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from '@angular/router';

import { NavComponent } from "./nav/nav.component";
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { OutletComponent } from './outlet/outlet.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { NotFoundComponent } from './404/404.component';
import { RegisterComponent } from './register/register.component';

import { LandingComponent } from './landing/landing.component';
import { ProductsComponent } from './products/products.component';
import { DetailsComponent } from './details/details.component';

import { HowToComponent } from './how-to/how-to.component';

import { ProductsService } from './products.service';


const routes: Routes = [
  {
    path: 'landing', redirectTo: '', pathMatch: 'full',
    component: LandingComponent
  },
  {
    path: '',
    component: OutletComponent
  },
  {
    path: 'login',
    component: LoginComponent
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
    path: 'products',
    component: ProductsComponent
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
    path: '**', component: NotFoundComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    OutletComponent,
    NavComponent,
    LoginComponent,
    PasswordResetComponent,
    RegisterComponent,
    NotFoundComponent,
    LandingComponent,
    ProductsComponent,
    DetailsComponent,
    HowToComponent
  ],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(routes)],
  exports: [
    //RouterModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
