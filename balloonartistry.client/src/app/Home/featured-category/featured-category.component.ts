import { Component, OnInit } from '@angular/core';
import { BalloonCategoryService } from '../../Services/balloon-category.service';

@Component({
  selector: 'app-featured-category',
  standalone: false,
  templateUrl: './featured-category.component.html',
  styleUrl: './featured-category.component.css'
})
export class FeaturedCategoryComponent implements OnInit {
  featuredCategories: any[] = [];

  constructor(private categoryService: BalloonCategoryService) { }

  ngOnInit(): void {
    this.featuredCategories = this.categoryService.getFeaturedCategories();
  }
}
