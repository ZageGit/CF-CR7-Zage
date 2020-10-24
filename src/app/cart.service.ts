import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];
  sum:number;

  constructor() { }
  // add to Cart function pushing chosen item into array items
  addToCart(tour) {
    this.items.push(tour);
  }
  getItems() {
    return this.items;
  }

   // Clear cart function for clearing array items
  clearCart() {
    this.items = [];
    return this.items;
  }

     // getLenght function to get lenght of array items, to display numbeOfItems in Navbar
  getLenght(){
    return this.items.length;
  }

}
