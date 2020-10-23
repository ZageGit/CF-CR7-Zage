import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  items;
  sum; 


  constructor(private cartService: CartService) { 
    this.items=this.cartService.getItems();
  }

  ngOnInit(): void {
    console.log(this.items);
    var sum = 0;
    this.items.forEach(function(tour){sum = sum+tour.price});
    document.getElementById("total").innerHTML = "Total: "+ sum + "€";
    
    
  }  
  ngDoCheck(){
  }
}
