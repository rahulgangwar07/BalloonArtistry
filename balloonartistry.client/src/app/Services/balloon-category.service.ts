// src/app/services/balloon-category.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BalloonCategoryService {
  constructor() {}

  getCategories(): any {
    return [
      {
        name: 'Welcome Baby Decoration',
        url: 'https://aniballoons.com/delhi-ncr/welcome-baby-decoration',
        subcategories: [
          {
            name: 'Girl Theme',
            url: 'https://aniballoons.com/delhi-ncr/welcome-baby-decoration/girl-theme'
          },
          {
            name: 'Boy Theme',
            url: 'https://aniballoons.com/delhi-ncr/welcome-baby-decoration/boy-theme'
          }
        ]
      },
      {
        name: 'Birthday Decoration',
        url: 'https://aniballoons.com/delhi-ncr/birthday-decoration',
        subcategories: [
          {
            name: 'Balloon Arch',
            url: 'https://aniballoons.com/delhi-ncr/birthday-decoration/balloon-arch'
          },
          {
            name: 'Room Decoration',
            url: 'https://aniballoons.com/delhi-ncr/birthday-decoration/room-decor'
          }
        ]
      },
      {
        name: 'Anniversary Decoration',
        url: 'https://aniballoons.com/delhi-ncr/anniversary-decoration',
        subcategories: [
          {
            name: 'Romantic Setup',
            url: 'https://aniballoons.com/delhi-ncr/anniversary-decoration/romantic-setup'
          },
          {
            name: 'Dining Surprise',
            url: 'https://aniballoons.com/delhi-ncr/anniversary-decoration/dining'
          }
        ]
      },
      // ... add more categories & subcategories as needed
    ];
  }

  //getCategories() {
  //  return [
  //    { name: 'Welcome Baby Decoration', url: 'https://aniballoons.com/delhi-ncr/welcome-baby-decoration' },
  //    { name: 'Kids Birthday Decoration', url: 'https://aniballoons.com/delhi-ncr/kids-birthday-decoration' },
  //    { name: 'Cartoon Theme Decoration', url: 'https://aniballoons.com/delhi-ncr/cartoon-theme-decoration' },
  //    { name: 'Anniversary Decoration', url: 'https://aniballoons.com/delhi-ncr/anniversary-decoration' },
  //    { name: 'Birthday Decoration', url: 'https://aniballoons.com/delhi-ncr/birthday-decoration' },
  //    { name: 'Love Theme Decoration', url: 'https://aniballoons.com/delhi-ncr/love-theme-decoration' },
  //    { name: 'Garland Decoration', url: 'https://aniballoons.com/delhi-ncr/garland-decoration' },
  //    { name: 'Ring Setup Decoration', url: 'https://aniballoons.com/delhi-ncr/ring-setup' },
  //    { name: 'Baby Shower Decoration', url: 'https://aniballoons.com/delhi-ncr/baby-shower-decoration' },
  //    { name: 'Bachelor Party Decoration', url: 'https://aniballoons.com/delhi-ncr/bachelor-party-decoration' },
  //    { name: 'Marquee Decoration', url: 'https://aniballoons.com/delhi-ncr/marquee-decoration' },
  //    { name: 'Special Occasion Decoration', url: 'https://aniballoons.com/delhi-ncr/special-occasion-decoration' },
  //    { name: 'Car Dikki Decoration', url: 'https://aniballoons.com/delhi-ncr/car-dikki-decoration' },
  //    { name: 'Canopy Decoration', url: 'https://aniballoons.com/delhi-ncr/canopy-decoration' },
  //    { name: 'Games & Activities', url: 'https://aniballoons.com/delhi-ncr/games-activities' },
  //    { name: 'Wedding Decoration', url: 'https://aniballoons.com/delhi-ncr/wedding-decoration' },
  //    { name: 'Premium Decorations', url: 'https://aniballoons.com/delhi-ncr/premium-decorations' }
  //  ];
  //}


  // src/app/services/balloon-category.service.ts
  getFeaturedCategories() {
    return [
      {
        name: 'Birthday Decoration',
        url: 'https://aniballoons.com/delhi-ncr/birthday-decoration',
        image: 'birthday-decoration.jpg',
        smallImage: 'small/birthday-decoration.jpg'
      },
      {
        name: 'Anniversary Decoration',
        url: 'https://aniballoons.com/delhi-ncr/anniversary-decoration',
        image: 'anniversary-decoration.jpg',
        smallImage: 'small/anniversary-decoration.jpg'
      },
      {
        name: 'Welcome Baby Decoration',
        url: 'https://aniballoons.com/delhi-ncr/welcome-baby-decoration',
        image: 'welcome-baby-decoration.jpg',
        smallImage: 'small/welcome-baby-decoration.jpg'
      },
      {
        name: 'Baby Shower Decoration',
        url: 'https://aniballoons.com/delhi-ncr/baby-shower-decoration',
        image: 'baby-shower-decoration.jpg',
        smallImage: 'small/baby-shower-decoration.jpg'
      },
      {
        name: 'Love Theme Decoration',
        url: 'https://aniballoons.com/delhi-ncr/love-theme-decoration',
        image: 'love-theme-decoration.jpg',
        smallImage: 'small/love-theme-decoration.jpg'
      },
      {
        name: 'Kids Birthday Decoration',
        url: 'https://aniballoons.com/delhi-ncr/kids-birthday-decoration',
        image: 'kids-birthday-decoration.jpg',
        smallImage: 'small/kids-birthday-decoration.jpg'
      },
      {
        name: 'Marquee Decoration',
        url: 'https://aniballoons.com/delhi-ncr/marquee-decoration',
        image: 'balloon-bouquet-decoration.jpg',
        smallImage: 'small/balloon-bouquet-decoration.jpg'
      },
      {
        name: 'Car Dikki Decoration',
        url: 'https://aniballoons.com/delhi-ncr/car-dikki-decoration',
        image: 'car-boot-decoration.jpg',
        smallImage: 'small/car-boot-decoration.jpg'
      },
      {
        name: 'Wedding Decoration',
        url: 'https://aniballoons.com/delhi-ncr/wedding-decoration',
        image: 'haldi-mehandi-decoration.jpg',
        smallImage: 'small/haldi-mehandi-decoration.jpg'
      },
      {
        name: 'Games & Activities',
        url: 'https://aniballoons.com/delhi-ncr/games-activities',
        image: 'magic-show.jpg',
        smallImage: 'small/magic-show.jpg'
      },
      {
        name: 'Premium Decorations',
        url: 'https://aniballoons.com/delhi-ncr/premium-decorations',
        image: 'premium-decoration.jpg',
        smallImage: 'small/premium-decoration.jpg'
      },
      {
        name: 'Bachelor Party Decoration',
        url: 'https://aniballoons.com/delhi-ncr/bachelor-party-decoration',
        image: 'bride-to-be-decoration.jpg',
        smallImage: 'small/bride-to-be-decoration.jpg'
      }
    ];
  }


  getCategoryWithProducts(): any[] {
    return [
      {
        name: 'Welcome Baby Decoration',
        url: 'https://aniballoons.com/delhi-ncr/welcome-baby-decoration',
        products: [
          {
            name: 'Baby Welcome Decoration Girl Theme',
            url: 'https://aniballoons.com/experience/62-baby-welcome-decoartion-boy-theme',
            image: 'https://aniballoons.com/uploads/product_images/medium/78911739865579.webp',
            price: 1600,
            originalPrice: 1800,
            discountPercent: 11
          },
          {
            name: 'Elegant Baby Boy Welcome Decor',
            url: 'https://aniballoons.com/experience/339-elegant-baby-boy-welcome-decor',
            image: 'https://aniballoons.com/uploads/product_images/medium/83951740646006.webp',
            price: 3800,
            originalPrice: 4500,
            discountPercent: 16
          },
          {
            name: "Baby Boy Welcome With Rose Patel's",
            url: 'https://aniballoons.com/experience/220-baby-boy-welcome-with-rose-patel-s',
            image: 'https://aniballoons.com/uploads/product_images/medium/30101707827342.webp',
            price: 3500,
            originalPrice: 4000,
            discountPercent: 13
          },
          {
            name: 'Pink Perfection Party Decoration',
            url: 'https://aniballoons.com/experience/336-pink-perfection-party-decoration',
            image: 'https://aniballoons.com/uploads/product_images/medium/74471742623669.webp',
            price: 4500,
            originalPrice: 5000,
            discountPercent: 10
          }
        ]
      }

      // Add more categories here if needed
    ];
  }


}
