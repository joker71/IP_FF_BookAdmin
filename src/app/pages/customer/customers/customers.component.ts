import { Component, OnInit } from '@angular/core';
import {Book} from "../../../model/book";
import {BookServiceService} from "../../../serves/book-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {PageEvent} from "@angular/material/paginator";
import {Customer} from "../../../model/customer";
import {CustomService} from "../../../serves/custom.service";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  customers: Customer[] = [];
  totalElements: number = 0;

  constructor(
    protected customerService: CustomService,
    protected router: Router,
    protected activeRouter: ActivatedRoute,
    protected modalService: NgbModal
  ) {
  }

  ngOnInit(): void {
    this.getCustomers({page: "0", size: "5"});
  }

  private getCustomers(request: any) {
    this.customerService.query(request)
      .subscribe(data => {
          console.log(data)
          this.onSucess(data.body)
        }
        , error => {
          console.log(error.error.message);
        }
      );
  }

  onSucess(data:any): void {
    this.customers = data['content'];
    this.totalElements = data['totalElements'];
  }
  nextPage(event: PageEvent) {
    this.getCustomers({
      page: event.pageIndex.toString(),
      size: event.pageSize.toString()
    });
  }

  onView(id: number){
    this.router.navigate([`/custom/details/${id}`]);
  }
}
