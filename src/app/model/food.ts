export class MFood
{
    id?: number;
    name?: string;
    price?: string;
    description?: string
    rate?: number;
    food_img?: string;
    food_category_id?: number;
    food_last_vote?: number;
    created_at?: Date;
    created_by?: String;
}
export class Food implements MFood{
    constructor( 
        public id?: number,
        public name?: string,
        public price?: string,
        public description?: string,
        public rate?: number,
        public food_img?: string,
        public food_category_id?: number,
        public food_last_vote?: number,
        public created_at?: Date,
        public created_by?: String,
    )
    {
        this.created_at= new Date();
        this.created_by= "Admin";
    }
}