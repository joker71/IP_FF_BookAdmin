export class MFoodCategory{
    id?: number;
    name?: string;
    created_by?: string;    
};
export class FoodCategory implements MFoodCategory{
    constructor(
        public id?: number,
        public name?: string,
        public create?: string
    )
    {}
}