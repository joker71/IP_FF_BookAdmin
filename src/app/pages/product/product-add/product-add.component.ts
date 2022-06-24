import {Component, OnInit} from '@angular/core';
import {Book} from "../../../model/book";
import {NgbDate, NgbDateParserFormatter, NgbDateStruct} from "@ng-bootstrap/ng-bootstrap";
import {ActivatedRoute, Router} from "@angular/router";
import {BookServiceService} from "../../../serves/book-service.service";
import {FormBuilder, FormGroup, Validator } from "@angular/forms";
import {UntilsService} from "../../../serves/untils.service";

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {


  id!: number;
  product: Book | null = null;
  model!: NgbDateStruct;
  fromDate!: NgbDate | null;
  catalogues: any = [];
  languages: any = [];
  authors: any = [];
  publishers: any = [];
  hasFile: boolean = false;
  fileName = '';
  upFile: any;
  formData: any
  readonly DELIMITER = '-';


  constructor(
    protected activeRouter: ActivatedRoute,
    protected service: BookServiceService,
    protected fb: FormBuilder,
    public formatter: NgbDateParserFormatter,
    protected utilServices: UntilsService,
    protected router: Router
  ) {
  }

  formGroup: FormGroup = this.fb.group({
    book_id: ['' ],
    title: ['' ],
    stock: ['' ],
    isbn13: ['' ],
    num_page: ['' ],
    publication_date: ['' ],
    catalogue: ['' ],
    publisher: ['' ],
    language: ['' ],
    price: ['' ],
    img: ['' ],
    author: ['' ]
  })

  ngOnInit(): void {
    this.utilServices.getCatalogue().subscribe(
      (res) => {
        this.catalogues = res.body;
        console.log(res)
      }
    )
    this.utilServices.getPublisher().subscribe(
      (res) => {
        this.publishers = res.body;
        console.log(res)
      }
    )
    this.utilServices.getAuthor().subscribe(
      (res) => {
        this.authors = res.body;
        console.log(res)
      }
    )
    this.utilServices.getLanguage().subscribe(
      (res) => {
        this.languages = res.body;
        console.log(res)
      }
    )

  }


  public createFromForm() {
    let bookModel = this.formGroup.value;
    console.log(this.formGroup);
    bookModel.publication_date = this.toModel(bookModel.publication_date);
    console.log(bookModel);
    this.service.create(bookModel).subscribe(
      (res) => {
        this.product = res.body
        if (this.product?.book_id) {
          this.service.upFile(this.formData, this.product?.book_id).subscribe(
            () => alert("Scucess"),
            () => alert("Error")
          )
        }
      },
      (e) => alert("Error")
    )
    setTimeout(() => {                           //<<<---using ()=> syntax
      this.router.navigate([`/product/details/${this.product?.book_id}`])
    }, 3000);
  }

  onFileSelected(event: any) {
    this.hasFile = true;
    const file: File = event.target.files[0];

    if (file) {

      this.fileName = file.name;
      this.upFile = file;
      const formData = new FormData();
      formData.append("file", file);
      this.formData = formData;
    }
  }

  toModel(date: NgbDateStruct | null): string | null {
    console.log(date)
    return date ? date.year + this.DELIMITER +
      (date.month < 10 ? ('0' + date.month) : date.month) + this.DELIMITER +
      (date.day < 10 ? ('0' + date.day) : date.day) : null;
  }
}
