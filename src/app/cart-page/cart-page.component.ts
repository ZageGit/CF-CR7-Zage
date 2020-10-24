import { Component, DoCheck, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css'],
})
export class CartPageComponent implements DoCheck {
  items;
  checkoutForm;
  sum;
  paySum;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: '',
    });
  }

  // Function for getting items array and creating sum and displaying//

  ngDoCheck() {
    this.items = this.cartService.getItems(); // grabbing items array//
    var sum = 0; // creating sum variable//
    this.items.forEach(function (tour) {
      sum = sum + tour.price;
    }); // loop through array and adding price parameter//
    var paySum = 0; // creating paySum variable, used for if /else statement to calculate discount//
    if (sum < 200) {
      // if paySum lower 200, 0% discount, displaying paySum//
      var paySum = sum;
      document.getElementById('total').innerHTML = 'Total: ' + paySum + '€';
    } else if (sum <= 499) {
      // else if paySum lower 499, 10% discount, displaying paySum and discount//
      var paySum = sum * 0.9;
      document.getElementById('total').innerHTML = 'Total: ' + paySum + '€';
      document.getElementById('discount').innerHTML = 'Discount: -10%';
    } else if (sum > 499) {
      // else if paySum greater 499, 20% discount, displaying paySum and discount//
      var paySum = sum * 0.8;
      document.getElementById('total').innerHTML = 'Total: ' + paySum + '€';
      document.getElementById('discount').innerHTML = 'Discount: -20%';
    }
  }
  onSubmit(customerData) {
    // on order Submit console warn, window alert, clearing array and clearing content of discount//
    console.warn('Your order has been submitted', customerData);
    window.alert('Thank you for your purchase!');
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
    document.getElementById('discount').innerHTML = '';
  }
}
