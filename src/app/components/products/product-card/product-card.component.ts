import { Product } from 'src/app/types';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input('product') product!: Product;

  constructor() { }

  ngOnInit(): void { 
   }

}
