// "id": 12,
// "status": 0,
// "customer_id": 12,
// "created_at": "2021-05-04",
// "description": "note",
// "chef_id": null

export class MOrder{
    id?:  number;
    status?: number;
    customer_id?: number;
    created_at?: Date;
    chef_id?: number;
    description?: string;
    value?: number
}
export class Order implements MOrder{
    constructor(
        public value?: number,
        public id?: number,
        public status?: number,
        public customer_id?: number,
        public created_at?: Date,
        public chef_id?: number,
        public description?: string,
    ){}
}