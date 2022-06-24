import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Book} from "../../../model/book";
import {BookServiceService} from "../../../serves/book-service.service";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  id!: number;
  product: Book | null=null;

  constructor(
    protected activeRouter: ActivatedRoute,
    protected service: BookServiceService,
    protected fb: FormBuilder
  ) { }

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
    img: [],
    author: []
  })
  ngOnInit(): void {
    let pId = this.activeRouter.snapshot.paramMap.get('id');
    this.id = pId!==null ? +pId : 0;
    this.service.find(this.id).subscribe(
      (res) => {
        this.product = res.body
        this.formGroup?.patchValue({
          book_id: this.product?.book_id,
          titile: this.product?.title,
          stock: this.product?.stock,
          isbn13: this.product?.isbn13,
          nume_page: this.product?.num_pages,
          publication_date:this.product?.publication_date,
          catalogue: this.product?.catalogue.catalogue_name,
          publisher: this.product?.publisher.publisher_name,
          language: this.product?.language.language_name,
          price: this.product?.price,
          author: this.product?.author.author_name
        })
      }
    )
  }

}
