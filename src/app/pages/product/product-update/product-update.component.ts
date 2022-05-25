import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Book} from "../../../model/book";
import {BookServiceService} from "../../../serves/book-service.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {NgbCalendar, NgbDate, NgbDateParserFormatter, NgbDateStruct} from "@ng-bootstrap/ng-bootstrap";
import {numberOfBytes} from "ng-jhipster/directive/number-of-bytes";

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss']
})
export class ProductUpdateComponent implements OnInit {


  id!: number;
  product: Book | null = null;
  model!: NgbDateStruct;
  fromDate!: NgbDate | null;
  readonly DELIMITER = '-';


  constructor(
    protected activeRouter: ActivatedRoute,
    protected service: BookServiceService,
    protected fb: FormBuilder,
    public formatter: NgbDateParserFormatter,
  ) {
  }

  formGroup: FormGroup = this.fb.group({
    book_id: [],
    titile: [],
    stock: [],
    isbn13: [],
    nume_page: [],
    publication_date: [],
    catalogue: [],
    publisher: [],
    language: [],
    price: [],
    img: []
  })

  ngOnInit(): void {
    let pId = this.activeRouter.snapshot.paramMap.get('id');
    this.id = pId !== null ? +pId : 0;
    this.service.find(this.id).subscribe(
      (res) => {
        this.product = res.body
        let date = new Date(this.product?.publication_date !);
        this.fromDate = new NgbDate(
          date.getFullYear(),
          date.getMonth(),
          date.getDay())
        this.formGroup?.patchValue({
          book_id: this.product?.book_id,
          titile: this.product?.title,
          stock: this.product?.stock,
          isbn13: this.product?.isbn13,
          nume_page: this.product?.num_pages,
          catalogue: this.product?.catalogue.catalogue_name,
          publisher: this.product?.publisher.publisher_name,
          language: this.product?.language.language_name,
          price: this.product?.price,
          publication_date: this.fromDate,
          img: this.product?.img
        })
        console.log(date)

      }
    )
  }

  public createFromForm() {
    let bookModel = this.formGroup.value;
    bookModel.publication_date = this.toModel(bookModel.publication_date);
    console.log(bookModel);
    this.service.update(bookModel).subscribe(
      () => alert("Scucess"),
      () => alert("Error")
    )
  }

  toModel(date: NgbDateStruct | null): string | null {
    console.log(date)
    return date ? date.year + this.DELIMITER +
      (date.month < 10 ? ('0' + date.month) : date.month) + this.DELIMITER +
      (date.day < 10 ? ('0' + date.day) : date.day) : null;
  }
}
