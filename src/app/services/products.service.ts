import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Product} from "../types"

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products:Array<Product> = [
    {publisherId: "fdsfds", imgUrl: "fdsfds.jpg", productName:"p1"},
    {publisherId: "fdsfds", imgUrl: "fdsfds.jpg", productName:"p2"},
    {publisherId: "fdsfds", imgUrl: "fdsfds.jpg", productName:"p3"},
    {publisherId: "fdsfds", imgUrl: "fdsfds.jpg", productName:"p4"},
    {publisherId: "fdsfds", imgUrl: "fdsfds.jpg", productName:"p5"},
    {publisherId: "fdsfds", imgUrl: "fdsfds.jpg", productName:"p6"},
    {publisherId: "fdsfds", imgUrl: "fdsfds.jpg", productName:"p40"},
    {publisherId: "fdsfds", imgUrl: "fdsfds.jpg", productName:"p50"},
    {publisherId: "fdsfds", imgUrl: "fdsfds.jpg", productName:"p60"},
    {publisherId: "fdsfds", imgUrl: "fdsfds.jpg", productName:"p400"},
    {publisherId: "fdsfds", imgUrl: "fdsfds.jpg", productName:"p500"},
    {publisherId: "fdsfds", imgUrl: "fdsfds.jpg", productName:"p600"}
  ];

  constructor() { }

  getProducts():Observable<Array<Product>> {
    return of(this.products)
  }
}
