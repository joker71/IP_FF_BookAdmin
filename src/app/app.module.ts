import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { FoodlistComponent } from './foodlist/foodlist.component';
import { HttpClientModule } from '@angular/common/http';
import { OrderModule } from 'ngx-order-pipe'; // <- import OrderModule
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';
import { FoodaddComponent } from './foodadd/foodadd.component';
import { ReactiveFormsModule } from '@angular/forms';  // <-- #1 import module
import { FoodupdateComponent } from './foodupdate/foodupdate.component';

import { FooddeleteComponent } from './fooddelete/fooddelete.component';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { FoodviewComponent } from './foodview/foodview.component';
import { FoodpageComponent } from './foodpage/foodpage.component';




@NgModule({
  declarations: [
    AppComponent,
    FoodlistComponent,
    FoodaddComponent,
    FoodupdateComponent,

    FooddeleteComponent,
    FoodviewComponent,
    FoodpageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TooltipModule.forRoot(),
    OrderModule,
    ToastrModule.forRoot(),
    NgxBootstrapIconsModule.pick(allIcons),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    CommonModule,
    AppRoutingModule, 

  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
