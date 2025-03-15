import { Component } from '@angular/core';
import { product } from '../../Core/Interfaces/Product';
import { ProductsService } from '../../Core/Services/products.service';

@Component({
  selector: 'app-product-form',
  standalone: false,
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent {

product = {} as product

  constructor(private productService:ProductsService){

  }
onSubmit() {

  this.productService.createProduct(this.product).subscribe(response=>{
   
    this.product={} as product;
   
  });

}
  
  

}
