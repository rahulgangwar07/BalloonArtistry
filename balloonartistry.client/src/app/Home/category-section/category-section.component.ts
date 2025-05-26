import { Component, OnInit } from '@angular/core';
import { BalloonCategoryService } from '../../Services/balloon-category.service';

@Component({
  selector: 'app-category-section',
  standalone: false,
  templateUrl: './category-section.component.html',
  styleUrl: './category-section.component.css'
})
export class CategorySectionComponent implements OnInit {
  categorySections: any[] = [];

  constructor(private categoryService: BalloonCategoryService) { }

  ngOnInit(): void {
    this.categorySections = this.categoryService.getCategoryWithProducts();
  }
}
