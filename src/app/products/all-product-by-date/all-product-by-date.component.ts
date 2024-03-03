import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all-product-by-date',
  templateUrl: './all-product-by-date.component.html',
  styleUrl: './all-product-by-date.component.css'
})
export class AllProductByDateComponent implements OnInit{
  searchDate ='';

  constructor(private ActivedRoute: ActivatedRoute)
  {

  }
 
 
  ngOnInit(): void {
    this.ActivedRoute.queryParams.subscribe(data =>
      {
        this.searchDate = data['date'];
      } 
      )}



}
