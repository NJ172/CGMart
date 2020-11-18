import { Product } from './product';

export class ShopCart{
    _id: string;
    DateCreated: Date;
    public productsList: Product[]=[];

    constructor(private productsListMap : Product[]){
        for(let productId in productsListMap){
            let item = productsListMap[productId];
            this.productsList.push({...item});
        }
    }

    getQuantity(product: Product){
        let item = this.productsList.find(x => x._id == product._id) as Product;
        product.quantity = item ? item.quantity : 0;
        return item ? item.quantity : 0
      }

    get totalItemCount(){
        let count=0;
        for(let productId in this.productsList)
            count += this.productsList[productId].quantity;

        return count;
    }
    get cartValue(){
        let sum = 0;
        for(let producId in this.productsList)
            sum += this.productsList[producId].price * this.productsList[producId].quantity;

        return sum;    
    }
}