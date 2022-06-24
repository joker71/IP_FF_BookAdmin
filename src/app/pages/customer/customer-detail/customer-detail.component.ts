import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CartService} from "../../../serves/cart.service";
import {CustomService} from "../../../serves/custom.service";
import {PageEvent} from "@angular/material/paginator";
import {Cart} from "../../../model/cart";

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent implements OnInit {

  id!: number;
  products: Cart[] = [];
  totalElements: number = 0;
  Customer: any;
  constructor(
    protected activeRouter: ActivatedRoute,
    protected service: CartService,
    protected router: Router,
    protected customerService: CustomService
  ) { }

  ngOnInit(): void {
    let pId = this.activeRouter.snapshot.paramMap.get('id');
    this.id = pId!==null ? +pId : 0;
    this.customerService.getInfor(this.id).subscribe(
      (res) => {this.Customer = res.body},
    (e) => {alert(e)}
    )
    this.getProducts({page: "0", size: "5"});

  }
  private getProducts(request: any) {
    this.service.queryCustomerOrder(request, this.id)
      .subscribe(data => {
          this.onSucess(data.body)
        }
        , error => {
          console.log(error.error.message);
        }
      );
  }
  onSucess(data:any): void {
    this.products = data['content'];
    this.totalElements = data['totalElements'];
  }
  nextPage(event: PageEvent) {
    this.getProducts({
      page: event.pageIndex.toString(),
      size: event.pageSize.toString()
    });
  }

  onView(id: number){
    this.router.navigate([`/cart/details/${id}`]);
  }

}
