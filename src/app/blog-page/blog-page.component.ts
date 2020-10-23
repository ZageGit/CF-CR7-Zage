import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { blogs } from '../blogs'
@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent implements OnInit {
  blogs=blogs;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
