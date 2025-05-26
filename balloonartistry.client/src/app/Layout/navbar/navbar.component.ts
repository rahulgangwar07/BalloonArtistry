import { Component, OnInit } from '@angular/core';
import { BalloonCategoryService } from '../../Services/balloon-category.service';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  balloonCategories: any[] = [];

  constructor(private categoryService: BalloonCategoryService) { }

  ngOnInit(): void {
    this.balloonCategories = this.categoryService.getCategories();
  }

}
