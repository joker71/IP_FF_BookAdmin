import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { Food, MFood } from '../model/food';
import { FoodService } from '../service/food.service';
import { ToastrService } from 'ngx-toastr'
import { FoodcategoryService } from '../service/foodcategory.service';



@Component({
  selector: 'app-fooddelete',
  templateUrl: './fooddelete.component.html',
  styleUrls: ['./fooddelete.component.css']
})
export class FooddeleteComponent implements OnInit {


   id: any;
   constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    protected foodService: FoodService,
    protected foodCategory: FoodcategoryService,
    public toastr: ToastrService
  ) { }

  ngOnInit(): void {
     this.id = Number(this.route.snapshot.paramMap.get('id'));
  }
  delete(){
    this.foodService.delete(this.id).subscribe();
  }
  cancel(){}

}
