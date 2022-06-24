import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartsComponent } from './carts/carts.component';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { CartStatusComponent } from './cart-status/cart-status.component';
import {RouterModule, Routes} from "@angular/router";
import {CustomersComponent} from "../customer/customers/customers.component";
import {CustomerDetailComponent} from "../customer/customer-detail/customer-detail.component";
import {MatPaginatorModule} from "@angular/material/paginator";

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'cart'
    },
    children: [
      {
        path: '',
        redirectTo: 'carts'
      },
      {
        path: 'carts',
        component: CartsComponent,
        data: {
          title: 'carts'
        }
      },
      {
        path: 'details/:id',
        component: CartDetailComponent,
        data: {
          title: 'customer detail'
        }
      }
    ]
  }
];

@NgModule({
  declarations: [
    CartsComponent,
    CartDetailComponent,
    CartStatusComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatPaginatorModule
  ]
})
export class CartModule { }
