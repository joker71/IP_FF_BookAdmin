import {Component, OnInit} from '@angular/core';
import {Book} from "../../../model/book";
import {FormBuilder, FormGroup} from "@angular/forms";
import {BookServiceService} from "../../../serves/book-service.service";
import {PageEvent} from '@angular/material/paginator';
import {ActivatedRoute, Router} from "@angular/router";
import {ModalService} from "@coreui/angular";


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Book[] = [];
  totalElements: number = 0;

  constructor(
    protected productService: BookServiceService,
    protected router: Router,
    protected activeRouter: ActivatedRoute,
    protected modalService: ModalService
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

  onDelete(id: number){

  }
  onView(id: number){
    this.router.navigate([`/product/details/${id}`]);
  }
  onEdit(id: number){
    this.router.navigate([`/product/update/${id}`]);
  }
}
