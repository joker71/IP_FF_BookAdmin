export class Address {
  address_id: number
  streetNumber: string
  streetName: string
  city: string

  constructor(address_id: number,
              streetNumber: string,
              streetName: string,
              city: string) {
    this.address_id = address_id;
    this.city = city;
    this.streetName = streetName;
    this.streetNumber = streetNumber;
  }

}
