import {Component, Input, OnInit} from '@angular/core';
import {Stock} from "../../../../model/stock";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {BookServiceService} from "../../../../serves/book-service.service";
import {Book} from "../../../../model/book";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  @Input() stock: any ;
  book: Book | null=null;
  constructor(public activeModal: NgbActiveModal,
              public bookService: BookServiceService) { }

  ngOnInit(): void {
    if(this.stock.book_id !== null)
    {
      this.bookService.find(this.stock?.book_id).subscribe(
        (res) => {this.book = res.body}
      )
    }

  }

}
