import { Component } from '@angular/core';
import { product } from '../../Core/Interfaces/Product';
import { ProductsService } from '../../Core/Services/products.service';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  products: product[] = [];
  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productService.getProducts().subscribe((response) => {
      this.products = response;
    });
  }
  deleteOneProduct(p: product) {
    if (confirm('voulez vous supprimer: ' + p.name)) {
      this.productService.deleteProduct(p.id || 0).subscribe((response) => {
        let index = this.products.indexOf(p);
        this.products.splice(index, 1);
      });
    }
  }
}
