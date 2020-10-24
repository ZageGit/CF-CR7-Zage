import { Component, DoCheck, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements  DoCheck {
  items;
  checkoutForm;
  sum; 
  paySum;


  constructor(private cartService: CartService, private formBuilder: FormBuilder) { 
    
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

  ngDoCheck() {
    this.items=this.cartService.getItems();

    console.log(this.items);
    var sum = 0;
    this.items.forEach(function(tour){sum = sum+tour.price});
    var paySum=0;
    if (sum<200){
      var paySum=sum;
      document.getElementById("total").innerHTML = "Total: "+ paySum + "€";

    }
    else if(sum<=499)
    {var paySum= sum*0.9;
      document.getElementById("total").innerHTML = "Total: "+ paySum + "€";
      document.getElementById("discount").innerHTML = "Discount: -10%";

    }
    else if (sum>499){
      var paySum = sum*0.8;
      document.getElementById("total").innerHTML = "Total: "+ paySum + "€";
      document.getElementById("discount").innerHTML = "Discount: -20%";

    }
    
  } 
  onSubmit(customerData) {
    console.warn('Your order has been submitted', customerData);
    window.alert('Thank you for your purchase!');
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
    document.getElementById("discount").innerHTML = "";


  }
}
