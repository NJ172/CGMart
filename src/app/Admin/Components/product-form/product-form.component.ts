import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../Shared/Services/category.service';
import { ProductService } from '../../../Shared/Services/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators'
import { Product } from '../../../Shared/Models/Product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
category$;
product : Product;
id;
  constructor(private categoryService : CategoryService, 
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute) {
    this.categoryService.getAll().subscribe((data)=>{
      this.category$ = data;
    });
    this.id = this.route.snapshot.paramMap.get('_id');
    if(this.id) this.productService.get(this.id).pipe(take(1)).subscribe((data) => {this.product = data as Product});
   }

  ngOnInit(): void {
  }
  save(product){
    if(this.id) this.productService.update(this.id,product).subscribe();
    else this.productService.create(product).subscribe();

    this.router.navigate(['/admin/products']);
  }
delete(){
  if(!confirm('Are you sure you want to delete this product')) return;

  this.productService.delete(this.id).subscribe();
  this.router.navigate(['/admin/products']);
}
}
