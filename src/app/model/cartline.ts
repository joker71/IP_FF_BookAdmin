import {Book} from "./book";

export class Cartline {
  line_id: number
  order: number
  book: Book
  price: number

  constructor(
    line_id: number,
    order: number,
    book: Book,
    price: number,
  ) {
    this.book = book;
    this.line_id = line_id;
    this.order = order;
    this.price = price
  }
}
