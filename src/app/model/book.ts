import {Catalogue} from "./catalogue";
import {Language} from "./language";
import {Publisher} from "./publisher";

export class Book {
  book_id: number;
  title: string;
  stock: number;
  isbn13: string;
  num_pages: number;
  publication_date: string;
  catalogue: Catalogue;
  language: Language;
  publisher: Publisher;
  img: string;
  price: number;

  constructor(
    book_id: number,
    title: string,
    stock: number,
    isbn13: string,
    num_pages: number,
    publication_date: string,
    catalogue: Catalogue,
    language: Language,
    publisher: Publisher,
    price: number,
    img: string,
  ) {
    this.price = price;
    this.img = img;
    this.book_id = book_id;
    this.isbn13 = isbn13;
    this.catalogue = catalogue;
    this.stock = stock;
    this.language = language;
    this.num_pages = num_pages;
    this.publication_date = publication_date;
    this.publisher = publisher;
    this.title = title;
  }
}
