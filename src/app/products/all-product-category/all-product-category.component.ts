import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all-product-category',
  templateUrl: './all-product-category.component.html',
  styleUrl: './all-product-category.component.css'
})
export class AllProductCategoryComponent implements OnInit {
 
searchCategory ='';

  constructor(private ActivedRoute: ActivatedRoute)
  {

  }
 
 
  ngOnInit(): void {
    this.ActivedRoute.queryParams.subscribe(data =>
      {
        this.searchCategory = data['category'];
      } 
      )
  }




}
