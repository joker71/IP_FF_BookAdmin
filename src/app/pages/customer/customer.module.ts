import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers/customers.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import {Router, RouterModule, Routes} from "@angular/router";



const routes: Routes = [
  {
    path: '',
    data: {
      title: 'customer'
    },
    children: [
      {
        path: '',
        redirectTo: 'customers'
      },
      {
        path: 'customers',
        component: CustomersComponent,
        data: {
          title: 'customers'
        }
      },
      {
        path: 'details/:id',
        component: CustomerDetailComponent,
        data: {
          title: 'customer detail'
        }
      }
    ]
  }
];

@NgModule({
  declarations: [
    CustomersComponent,
    CustomerDetailComponent,
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class CustomerModule { }
