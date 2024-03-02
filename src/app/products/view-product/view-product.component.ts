import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrl: './view-product.component.css'
})
export class ViewProductComponent implements OnInit {
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
