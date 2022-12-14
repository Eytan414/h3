import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/types';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products$!: Observable<Array<Product>>;

  constructor(private productsService:ProductsService ) { }

  ngOnInit(): void {
    this.products$ = this.productsService.getProducts();
  }

}
