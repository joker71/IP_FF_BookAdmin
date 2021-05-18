import { Component, OnInit } from '@angular/core';
import { MFood } from '../model/food';
import { Router } from '@angular/router';
import { FoodService } from '../service/food.service';
import { OrderPipe } from 'ngx-order-pipe';


@Component({
  selector: 'app-foodlist',
  templateUrl: './foodlist.component.html',
  styleUrls: ['./foodlist.component.css']
})
export class FoodlistComponent implements OnInit {

  nextcom: string = "listfood";
  listfood: any=[];
  bookid?: number;
  bookout: MFood | null= null;
  order: string = 'price';
  reverse: boolean = false;
  constructor(
    private orderPipe: OrderPipe,
    private foodService:FoodService,
    private router: Router
  ) {
   
  }

  ngOnInit(): void {
    this.nextcom='foodlist';
    this.foodService.query().subscribe(data=>
      {
        this.listfood=this.orderPipe.transform(data, "price");
        //this.listfood= data
        console.log(this.listfood);
      })
  }
  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }
  update(food: MFood):void{
    console.log(food);
    this.router.navigate(['update',this.listfood[0].id]);
  }

}
