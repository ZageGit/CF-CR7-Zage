import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tours } from '../tours'


@Component({
  selector: 'tour-details',
  templateUrl: './tour-details.component.html',
  styleUrls: ['./tour-details.component.css']
})
export class TourDetailsComponent implements OnInit {
  tour;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.tour = tours[+params.get('tourId')];
       });
  }

}
