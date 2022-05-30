import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {BookServiceService} from "../../../serves/book-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.scss']
})
export class ProductDeleteComponent implements OnInit {

  @Input() id: any
  constructor(public activeModal: NgbActiveModal,
              public router: Router,
              public bookService: BookServiceService) { }

  ngOnInit(): void {
  }

  onDelete(){
    this.bookService.delete(this.id).subscribe(
      () => {
        this.activeModal.close('Close click')
        this.router.navigate(['/product/products'])
      }
    );
  }
  onCancel(){
    this.activeModal.close('Close click')
  }
}
