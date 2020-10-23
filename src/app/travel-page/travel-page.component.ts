import { Component, OnInit } from '@angular/core';
import { tours } from '../tours';


@Component({
  selector: 'app-travel-page',
  templateUrl: './travel-page.component.html',
  styleUrls: ['./travel-page.component.css']
})
export class TravelPageComponent implements OnInit {
  tours=tours;

  constructor() { }

  ngOnInit(): void {
  }

}
