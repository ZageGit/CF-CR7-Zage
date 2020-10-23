import { Component, OnInit } from '@angular/core';
import { tours } from '../tours'


@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  tours=tours;

  constructor() { }

  ngOnInit(): void {
  }

}
