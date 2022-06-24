import {Customer} from "./customer";

export class Cart {
  id: number
  custom: Customer
  order_date: string
  shipping_method_id: number
  dest_address_id: number

  constructor(id: number,
              custom: Customer,
              order_date: string,
              shipping_method_id: number,
              dest_address_id: number,) {
    this.custom = custom;
    this.id = id;
    this.dest_address_id = dest_address_id;
    this.shipping_method_id = shipping_method_id;
    this.order_date = order_date
  }
}
