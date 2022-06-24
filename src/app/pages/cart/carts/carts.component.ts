import { Component, OnInit } from '@angular/core';
import {Book} from "../../../model/book";
import {BookServiceService} from "../../../serves/book-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {PageEvent} from "@angular/material/paginator";
import {ProductDeleteComponent} from "../../product/product-delete/product-delete.component";
import {CartService} from "../../../serves/cart.service";
import {Cart} from "../../../model/cart";
import {CartDetailComponent} from "../cart-detail/cart-detail.component";
import {CartStatusComponent} from "../cart-status/cart-status.component";

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.scss']
})
export class CartsComponent implements OnInit {

  products: Cart[] = [];
  totalElements: number = 0;

  constructor(
    protected productService: CartService,
    protected router: Router,
    protected activeRouter: ActivatedRoute,
    protected modalService: NgbModal
  ) {
  }

  ngOnInit(): void {
    this.getProducts({page: "0", size: "5"});
  }

  private getProducts(request: any) {
    this.productService.query(request)
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

  onEdit(id: number){
    const modelRef = this.modalService.open(CartStatusComponent)
    modelRef.componentInstance.id = id
  }
}
