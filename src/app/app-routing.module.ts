import { CommentsComponent } from './core//comments/component/comments.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartComponent } from './cart/components/cart/cart.component';
import { LoginComponent } from './core/components/login/login.component';
import { IndexComponent } from './index/index.component';
import { ProductListComponent } from './products/components/product-list/product-list.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'index'
  },
  {
    path: 'index',
    component: IndexComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },

  {
    path: 'products',
    component: ProductListComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'comments/:id',
    component: CommentsComponent,
    outlet: 'popup'
  },
  {
    path: '**',
    component: IndexComponent,
    outlet: 'popup'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
