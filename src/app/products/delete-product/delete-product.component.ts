import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrl: './delete-product.component.css'
})
export class DeleteProductComponent implements OnInit{

  productId = 0;
  constructor(private activatedRoutes: ActivatedRoute)
  {
 
  }
   ngOnInit(): void {
     this.activatedRoutes.params.subscribe(data => {
     
       this.productId = data['id'];
     });
   
   }

}
