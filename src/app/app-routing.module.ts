import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { FoodupdateComponent } from '../app/foodupdate/foodupdate.component'
import { FooddeleteComponent } from './fooddelete/fooddelete.component';
import { FoodviewComponent } from './foodview/foodview.component';
import { FoodaddComponent } from './foodadd/foodadd.component';
import { FoodlistComponent } from './foodlist/foodlist.component';

const routes: Routes = [
  { path: 'update/:id', component:FoodupdateComponent},
  { path: 'home', component:FoodlistComponent},
  
  { path: 'add', component: FoodaddComponent},
  { path: 'view/:id', component: FoodviewComponent },
  { path: 'delete/:id', component: FooddeleteComponent}
];

@NgModule({
  
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
