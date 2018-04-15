import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './../core/guards/auth.guard';
import { AdminComponent } from './admin.component';
import { ManageProductsComponent } from './components/manage-products/manage-products.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        children: [
          { path: 'products', component: ManageProductsComponent }
        ]
      }
    ]
  }
 ];

 export const adminRouterComponents = [AdminComponent, ManageProductsComponent];

 @NgModule({
  imports: [
  RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
 })
 export class AdminRoutingModule { }