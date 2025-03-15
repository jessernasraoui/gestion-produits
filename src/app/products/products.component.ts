import { Component } from '@angular/core';
import { ProductsService } from '../Core/Services/products.service';
import { product } from '../Core/Interfaces/Product';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {}
