import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tours } from '../tours'
import { CartService } from '../cart.service';


@Component({
  selector: 'tour-details',
  templateUrl: './tour-details.component.html',
  styleUrls: ['./tour-details.component.css']
})
export class TourDetailsComponent implements OnInit {
  tour;

  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  addToCart(tour) {
    window.alert('Your tour has been added to the cart!');
    this.cartService.addToCart(tour);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.tour = tours[+params.get('tourId')];
       });
  }

}
