import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../Shared/Services/product.service';
import { Product } from '../../../Shared/Models/Product';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
dtOptions: DataTables.Settings={};
  products: Product[];
  filteredProducts: Product[];
  constructor(private productService: ProductService) { 
    this.dtOptions={
      pagingType: 'full_numbers',
      pageLength:5
    }
    this.productService.getAll().subscribe((data)=>{
      this.filteredProducts = this.products = data as Product[];
    });
  }

  ngOnInit(): void {
  }
  filter(query: string){
    this.filteredProducts = (query)? this.products.filter(p=>p.title.toLowerCase().includes(query.toLowerCase())) 
    : this.products;
  }

}
