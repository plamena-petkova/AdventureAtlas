import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselComponent, CarouselModule } from 'ngx-bootstrap/carousel';
import { setTheme } from 'ngx-bootstrap/utils';

@Component({
  selector: 'app-popular-places',
  standalone: true,
  imports: [CarouselModule, CommonModule],
  templateUrl: './popular-places.component.html',
  styleUrl: './popular-places.component.scss'
})
export class PopularPlacesComponent {

  slides: {image: string; text?: string}[] = [
    {image: 'https://cdn.pixabay.com/photo/2017/08/22/22/36/cinque-terre-2670762_1280.jpg', text:'Italy'},
    {image: 'https://cdn.pixabay.com/photo/2023/04/22/18/15/beach-7944181_1280.jpg', text:'Spain'},
    {image: 'https://cdn.pixabay.com/photo/2022/04/06/20/30/big-ben-7116305_1280.jpg', text:'Great Britain'}
  ];
  noWrapSlides = false;
}
