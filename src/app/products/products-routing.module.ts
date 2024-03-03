import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { ListProductComponent } from './list-product/list-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { AllProductByDateComponent } from './all-product-by-date/all-product-by-date.component';
import { AllProductCategoryComponent } from './all-product-category/all-product-category.component';

const routes: Routes = [
  {path: '', component: ProductsComponent },
  {path: 'create-product', component: CreateProductComponent },
  {path: 'list-product', component: ListProductComponent},
  {path: 'search', component: AllProductCategoryComponent},
  {path: 'search-date', component: AllProductByDateComponent},
  {path: 'delete-product/:id', component: DeleteProductComponent},
  {path: 'view-product/:id', component: ViewProductComponent},
  {path: 'update-product/:id', component: UpdateProductComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
