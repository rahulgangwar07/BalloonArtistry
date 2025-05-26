import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Layout/navbar/navbar.component';
import { FeaturedCategoryComponent } from './Home/featured-category/featured-category.component';
import { CategorySectionComponent } from './Home/category-section/category-section.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FeaturedCategoryComponent,
    CategorySectionComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
