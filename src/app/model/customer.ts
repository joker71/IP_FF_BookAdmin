import {Address} from "./address";

export class Customer {
  customer_id: number
  fist_name: string
  last_name: string
  email: string
  address: Address[]

  constructor(customer_id: number,
              fist_name: string,
              last_name: string,
              email: string,
              address: Address[]) {
    this.customer_id = customer_id;
    this.address = address;
    this.fist_name = fist_name;
    this.last_name = last_name;
    this.email = email;
  }
}
