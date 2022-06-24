import { Component, OnInit } from '@angular/core';
import {Book} from "../../../model/book";
import {Cart} from "../../../model/cart";
import {Cartline} from "../../../model/cartline";
import {ActivatedRoute} from "@angular/router";
import {BookServiceService} from "../../../serves/book-service.service";
import {CartService} from "../../../serves/cart.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.scss']
})
export class CartDetailComponent implements OnInit {

  id!: number;
  Cart: any ;
  CartLine: any;
  constructor(
    protected activeRouter: ActivatedRoute,
    protected service: CartService,
    protected modalService: NgbModal
  ) { }

  ngOnInit(): void {
    let pId = this.activeRouter.snapshot.paramMap.get('id');
    this.id = pId!==null ? +pId : 0;
    this.service.queryOrderLine(this.id).subscribe(
      (res) => {
        this.CartLine = res.body
      },
    (e) => { alert(e)}
    )
    this.service.cartDetails(this.id).subscribe(
      (res) => {
        this.Cart = res.body
      },
      (e) => { alert(e)}
    )

  }

}
