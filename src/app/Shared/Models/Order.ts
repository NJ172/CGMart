import { ShopCart } from './ShopCart';
import { Shipping } from './shipping';

export class Order{
    dateOrdered : number;
    items: any[];
    cartValue: number;
    constructor(public userId: string, shoppingCart : ShopCart, public shipping : Shipping){
        this.dateOrdered = new Date().getTime();
        this.items = shoppingCart.productsList.map(i => {
            return {
              product :{
                title : i.title,
                imageURL : i.imageURL,
                price : i.price,
                quantity : i.quantity 
              },
              totalPrice : i.quantity*i.price
            }
          });
          this.cartValue = shoppingCart.cartValue;
    }
}