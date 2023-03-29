import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {
  images = ['img1.jpg', 'img2.jpg', 'img3.jpg'];
  currentImage = 0;
  showImage = true;
  headlines = [
    'Bring engineering to the next level',
    'Born to code',
    'Graduated at WU'
  ];

  ngOnInit() {
    this.updateImages()
  }

  updateImages() {

    setInterval(() => {
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length;
      this.showImage = false;

      setTimeout(() => {
        this.showImage = true;
      }, 10);
    }, 8000)
  }

}

