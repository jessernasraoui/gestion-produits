import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ProductFormComponent } from '../Pages/product-form/product-form.component';
import { ProductListComponent } from '../Pages/product-list/product-list.component';

const routes: Routes = [
  { path: 'addproduct', component: ProductFormComponent },
  {
    path: '',
    component: ProductsComponent,
    children: [
      { path: '', component: ProductListComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
