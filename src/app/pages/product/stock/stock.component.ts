import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalService } from '@coreui/angular';
import { Book } from 'src/app/model/book';
import { Stock } from 'src/app/model/stock';
import { BookServiceService } from 'src/app/serves/book-service.service';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {DetailsComponent} from "./details/details.component";

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {

  products: Stock[] = [];
  totalElements: number = 0;

  constructor(
    protected productService: BookServiceService,
    protected router: Router,
    protected activeRouter: ActivatedRoute,
    protected modalService: NgbModal
  ) {
  }

  ngOnInit(): void {
    this.getProducts({page: "0", size: "5"});
  }

  private getProducts(request: any) {
    this.productService.getStock(request)
      .subscribe(
        data => {
          console.log (data.body)
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

  onDelete(id: number){
  }
  onView(stock: Stock){
    const modalRef = this.modalService.open(DetailsComponent,  { size: 'lg' })
    modalRef.componentInstance.stock = stock;
  }
  onEdit(id: number){
  }

}
