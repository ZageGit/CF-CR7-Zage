import { Component, OnInit } from '@angular/core';
import { tours } from '../tours'
import { CartService } from '../cart.service';



@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  tours=tours;
  numberOfItems;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }
ngDoCheck(){
  this.numberOfItems = this.cartService.getLenght();
}
}
