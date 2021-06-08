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
  selector: 'app-foodupdate',
  templateUrl: './foodupdate.component.html',
  styleUrls: ['./foodupdate.component.css']
})
export class FoodupdateComponent implements OnInit {


  foodin!: MFood;
  isSaving = false;
  date = new Date();
  food: MFood | null=null;
  indexCurrent = 0;
  listCategory: any = [];

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    protected foodService: FoodService,
    protected foodCategory: FoodcategoryService,
    public toastr: ToastrService
  ) { }

  createForm = this.formBuilder.group({
    id: [],
    name: [],
    price: [],//[[null, Validators.required]],
    description: [],// [],
    rate: [],// [],
    img: [],// [[null, Validators.required]],
    food_category_id: [],// [],
    food_last_vode: [],// [],
    created_at: [],// [[null, Validators.required]],
    created_by: [],//[[null, Validators.required]]
  })

  ngOnInit(): void {
    console.log(1);
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.foodService.find(id).subscribe((res) => {
      this.food= res.body;
      this.createForm.patchValue({
        id: this.food?.id,
        name: this.food?.name,
        price: this.food?.price,//[[null, Validators.required]],
        description: this.food?.description,// [],
        rate: this.food?.rate,// [],
        img: this.food?.food_img,// [[null, Validators.required]],
        food_category_id: this.food?.food_category_id,// [],
        food_last_vode: this.food?.food_last_vote,// [],
        created_at: this.food?.created_at,// [[null, Validators.required]],
        created_by:this.food?.created_by,//[[null, Validators.required]]
      })
    })

    this.foodCategory.query().subscribe(res => {
      this.listCategory = res;
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
      food_img: this.createForm.get(['img'])!.value,
      food_category_id: this.createForm.get(['food_category_id'])!.value,
      food_last_vote: 2.1,
      created_by: this.createForm.get(['created_by'])!.value,
      created_at: this.date,
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
        this.foodService.update(food)
      );
      //this.showError();
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
    alert("Sucesss");
    this.toastr.success('everything is broken', 'Major Error', {
      timeOut: 3000,
    });
    
  }
  showError() {
    alert("Fails");
    this.toastr.error('Vui long kiem tra lai', 'Nhap sai', {
      timeOut: 3000,
    });
  }
  

}
