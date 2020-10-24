import { Component, OnInit } from '@angular/core';
import { tours } from '../tours';
import { CartService } from '../cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-travel-page',
  templateUrl: './travel-page.component.html',
  styleUrls: ['./travel-page.component.css'],
})
export class TravelPageComponent implements OnInit {
  tours = tours;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  // add to Cart function from cart.service displaying an alert and pushing chosen element into array//
  addToCart(tour) {
    window.alert('Your tour has been added to the cart!');
    this.cartService.addToCart(tour);
  }

  ngOnInit(): void {}
}
