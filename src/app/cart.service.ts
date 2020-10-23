import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];
  sum:number;

  constructor() { }
  addToCart(tour) {
    this.items.push(tour);
  }
  getItems() {
    return this.items;
  }
 
  clearCart() {
    this.items = [];
    return this.items;
  }
  getLenght(){
    return this.items.length;
  }

  getTotal(){
    return this.sum;
  }
}
