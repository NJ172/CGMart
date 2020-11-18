import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../Shared/Services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../Shared/Models/Product';
import 'rxjs/add/operator/switchMap';
import { ShoppingCartService } from '../../../Shared/Services/shopping-cart.service';
import { ShopCart } from '../../../Shared/Models/ShopCart';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
products: Product[];
filteredProducts: Product[];
cart : ShopCart;
category;
  constructor(private productService: ProductService,
    private cartService : ShoppingCartService,
    private route: ActivatedRoute) {   }

  async ngOnInit(){
    (await this.cartService.getCart()).subscribe(cart => {this.cart = cart;});
    this.populateProduct();
  }
private populateProduct(){
    this.productService.getAll()
      .switchMap(products => {
        this.products = products as Product[];
        return this.route.queryParamMap;
      })
      .subscribe(params=>{
          this.category = params.get('category');
          this.applyFilter();
        });
  }
private applyFilter(){
  this.filteredProducts = (this.category)?
          this.products.filter(p => p.category === this.category) 
          : this.products;
  }
}
