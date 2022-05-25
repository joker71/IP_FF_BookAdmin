import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorUpdateComponent } from './author-update/author-update.component';
import { AuthorComponent } from './author/author.component';
import { PublisherUpdateComponent } from './publisher-update/publisher-update.component';
import { PublishersComponent } from './publishers/publishers.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductDeleteComponent } from './product-delete/product-delete.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { StockComponent } from './stock/stock.component';
import {RouterModule, Routes} from "@angular/router";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {MatPaginatorModule} from "@angular/material/paginator";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  DropdownModule,
  FormModule,
  GridModule,
  ListGroupModule,
  SharedModule
} from '@coreui/angular';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'product'
    },
    children: [
      {
        path: '',
        redirectTo: 'products'
      },
      {
        path: 'products',
        component: ProductsComponent,
        data: {
          title: 'products'
        }
      },
      {
        path: 'details/:id',
        component: ProductDetailsComponent,
        data: {
          title: 'Product detail'
        }
      },
      {
        path: 'update/:id',
        component: ProductUpdateComponent,
        data: {
          title: 'update product'
        }
      },
      {
        path: 'author',
        component: AuthorComponent,
        data: {
          title: 'author'
        }
      },
      {
        path: 'author/:id',
        component: AuthorUpdateComponent,
        data: {
          title: 'author update'
        }
      },
      {
        path: 'publisher/:id',
        component: PublisherUpdateComponent,
        data: {
          title: 'publisher update'
        }
      },
      {
        path: 'publisher',
        component: PublishersComponent,
        data: {
          title: 'publisher'
        }
      },
      {
        path: 'add',
        component: ProductAddComponent,
        data: {
          title: 'new product'
        }
      },
      {
        path: 'stock',
        component: StockComponent,
        data: {
          title: 'stock'
        }
      },
    ]
  }
];

@NgModule({
  declarations: [
    AuthorUpdateComponent,
    AuthorComponent,
    PublisherUpdateComponent,
    PublishersComponent,
    ProductsComponent,
    ProductDetailsComponent,
    ProductDeleteComponent,
    ProductAddComponent,
    ProductUpdateComponent,
    StockComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes), ReactiveFormsModule, FormsModule, NgbModule, MatPaginatorModule, CardModule, GridModule, FormModule, MatFormFieldModule, MatDatepickerModule
  ]
})
export class ProductModule { }
