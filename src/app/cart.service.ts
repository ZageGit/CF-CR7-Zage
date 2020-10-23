import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];

  constructor() { }
  addToCart(tour) {
    this.items.push(tour);
    console.log(this.items);
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
}
