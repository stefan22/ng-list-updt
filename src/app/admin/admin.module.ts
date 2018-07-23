import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddProductComponent } from './add-product/add-product.component';
import { PermissionsComponent } from './permissions/permissions.component';

import { LoggedInGuard } from "../services/logged-in.guard";
import { PerSavedGuard } from "../services/per-saved.guard";
import { UsersService } from '../services/users.service';

import { ReactiveFormsModule } from "@angular/forms";



const adminRoutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [LoggedInGuard],
    
    children: [
      {
        path: 'admin',
        component: UsersComponent
      },

      {
        path: 'add-user',
        component: AddUserComponent
      },
      {
        path: 'add-product',
        component: AddProductComponent
      },
      {
        path: 'permissions',
        component: PermissionsComponent,
        canDeactivate: [PerSavedGuard]
      }
    ]
  }


];


@NgModule({
  declarations: [
    AdminComponent,
    UsersComponent,
    AddUserComponent,
    PermissionsComponent,
    AddProductComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(adminRoutes)
  ],
  providers: [
    LoggedInGuard, 
    PerSavedGuard, 
    UsersService
  
  ]
})
export class AdminModule {}
