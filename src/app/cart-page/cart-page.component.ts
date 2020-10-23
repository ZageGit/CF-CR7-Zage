import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  items;

  constructor(private cartService: CartService) { 
    this.items=this.cartService.getItems();
  }

  ngOnInit(): void {
  }

}
