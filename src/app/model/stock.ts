export class Stock {
    store_id : number
    book_id : number
    number_item : number
    statusDate : string
    input_price : number
    constructor(id: number, status_date: string, price: number, nums_item: number, book_id: number) {
        this.book_id = book_id;
        this.input_price = price;
        this.store_id = id;
        this.statusDate = status_date;
        this.number_item = nums_item
    }
  }
  