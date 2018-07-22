import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { LoginModule } from './login/login.module';

import { NavComponent } from './nav/nav.component';
import { AppComponent } from './app.component';

import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HowToComponent } from './how-to/how-to.component';


import { LandingComponent } from './landing/landing.component';
import { NotFoundComponent } from './404/404.component';
import { ProductsComponent } from './products/products.component';
import { DetailsComponent } from './products/details/details.component';
import { ProductsService } from './services/products.service';


const appRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent
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
    path: '**',
    component: NotFoundComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavComponent,
    RegisterComponent,
    NotFoundComponent,
    LandingComponent,
    ProductsComponent,
    DetailsComponent,
    HowToComponent
   
  ],
  imports: [
    BrowserModule, 
    ReactiveFormsModule,
    HttpClientModule, 
    AdminModule,
    LoginModule,
    RouterModule.forRoot(appRoutes)
  ],

  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
