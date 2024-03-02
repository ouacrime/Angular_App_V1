import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ListProductComponent } from './list-product/list-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { AllProductByDateComponent } from './all-product-by-date/all-product-by-date.component';
import { AllProductCategoryComponent } from './all-product-category/all-product-category.component';
import { ViewProductComponent } from './view-product/view-product.component';


@NgModule({
  declarations: [
    ProductsComponent,
    CreateProductComponent,
    ListProductComponent,
    UpdateProductComponent,
    DeleteProductComponent,
    AllProductByDateComponent,
    AllProductCategoryComponent,
    ViewProductComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
