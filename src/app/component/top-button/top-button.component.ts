import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-top-button',
  templateUrl: './top-button.component.html',
  styleUrls: ['./top-button.component.css']
})
export class TopButtonComponent {
  showTopButton = false;

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    if (window.scrollY > 200) {
      this.showTopButton = true;
    } else {
      this.showTopButton = false;
    }
  }
}
