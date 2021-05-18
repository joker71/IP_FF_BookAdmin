import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { AbstractControl, AsyncValidatorFn, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Food, MFood } from '../model/food';
import { FoodService } from '../service/food.service';
import { ToastrService } from 'ngx-toastr'
import { FoodcategoryService } from '../service/foodcategory.service';
import { MFoodCategory } from '../model/foodcategory';

@Component({
  selector: 'app-foodadd',
  templateUrl: './foodadd.component.html',
  styleUrls: ['./foodadd.component.css']
})
export class FoodaddComponent implements OnInit {

  isSaving = false;
  food: MFood[] = [];
  date = new Date();
  indexCurrent = 0;
  listCategory: any=[];

  constructor(
    private formBuilder: FormBuilder,
    protected foodService: FoodService,
    protected foodCategory: FoodcategoryService,
    public toastr: ToastrService
  ) { }

  createForm = this.formBuilder.group({
    id:null,// [[null, Validators.required]],
    name:null,// [[null, Validators.required]],
    price: null,//[[null, Validators.required]],
    description:null,// [],
    rate:null,// [],
    img:null,// [[null, Validators.required]],
    food_category_id:null,// [],
    food_last_vode:null,// [],
    created_at:null,// [[null, Validators.required]],
    created_by: null,//[[null, Validators.required]]
  })

  ngOnInit(): void {
    this.foodCategory.query().subscribe(res=>{
      this.listCategory= res;
    })
  }
  private createFromForm(): MFood {
    return {
      ... new Food(),
      id: undefined,
      name: this.createForm.get(['name'])!.value,
      price: this.createForm.get(['price'])!.value,
      description: this.createForm.get(['description'])!.value,
      rate: 1,
      food_category_id: this.createForm.get(['food_category_id'])!.value,
      food_last_vote: 2.1,
      created_by: this.createForm.get(['created_by'])!.value,
      created_at: this.date,
      food_img: this.createForm.get(['img'])!.value
    }
  }
  checkBasicInformation(): boolean {
    if (this.indexCurrent === 0) {
      for (const i in this.createForm.controls) {
        if (Object.prototype.hasOwnProperty.call(this.createForm.controls, i)) {
          this.createForm.controls[i].markAsDirty();
          this.createForm.controls[i].updateValueAndValidity();
        }
      }
      if (!this.createForm.valid) {
        this.showError();
        return false;
      }
      return true;
    }
    return true;
  }
  save(): void {
    if (this.checkBasicInformation()) {
      this.isSaving = true;
      const food = this.createFromForm();
      console.log(food);
      this.subscribeToSaveResponse(
        this.foodService.create(food)
      );
    }

  }
  protected subscribeToSaveResponse(result: Observable<HttpResponse<MFood>>): void {
    result.subscribe(
      () => this.onSaveSuccess(),
      () => this.onSaveError()
    );
  }
  protected onSaveSuccess(): void {
    this.isSaving = false;
    this.showSuccess;
  }
  protected onSaveError(): void {
    this.isSaving = false;
    this.showError;
  }
  showSuccess() {
    this.toastr.success('everything is broken', 'Major Error', {
      timeOut: 3000,
    });
  }
  showError() {
    this.toastr.error('Vui long kiem tra lai', 'Nhap sai', {
      timeOut: 3000,
    });
  }

}
