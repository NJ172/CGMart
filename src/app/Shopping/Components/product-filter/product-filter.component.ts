import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from '../../../Shared/Services/category.service';

@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent{
  categories;
  @Input('category') category;
  constructor( private categoryService: CategoryService) {
    this.categoryService.getAll().subscribe(data=>{this.categories = data});   
   }

}
