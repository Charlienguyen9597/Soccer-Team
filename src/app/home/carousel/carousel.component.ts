import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor() { }
  // this is sample collect image from back end 
  // images = [1, 2, 3].map(() => `https://picsum.photos/1800/500?random&t=${Math.random()}`);

  // get image from local store
  images = [1, 2, 3].map(() => `../../../../../assets/img/banner9.jpg`);
  ngOnInit() {
  }

}


