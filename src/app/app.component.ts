import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  images = ['img1.jpg', 'img2.jpg', 'img3.jpg'];
  currentImage = 0;
  showImage = true;

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
