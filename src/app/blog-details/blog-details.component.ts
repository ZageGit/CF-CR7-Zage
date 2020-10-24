import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { blogs } from '../blogs'


@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {
  blog;
  comment;

  constructor(private route: ActivatedRoute) { }

  // on Init routiung //
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.blog = blogs[+params.get('blogId')];
       });
  }
}
