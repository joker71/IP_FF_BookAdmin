import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MFood } from '../model/food';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../service/food.service';
import { FoodcategoryService } from '../service/foodcategory.service';

@Component({
  selector: 'app-foodview',
  templateUrl: './foodview.component.html',
  styleUrls: ['./foodview.component.css']
})
export class FoodviewComponent implements OnInit {


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
    protected foodCategory: FoodcategoryService
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

   
  }
}
