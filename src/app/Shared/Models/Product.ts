export class Product{
    _id: string;
    title: string;
    price: number;
    category : string;
    imageURL: string;
    quantity: number;
    
    constructor(init?: Partial<Product>){
        Object.assign(this, init);
    }
    
    //get totalPrice(){ return this.price*this.quantity;  }
}