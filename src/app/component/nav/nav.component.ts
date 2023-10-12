import { Component, } from '@angular/core';
import { LanguageService } from 'src/app/language.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css', './nav.component.responsive.css']
})
export class NavComponent {
  active = false;
  enOn = false;
  esOn = true;

  constructor(private languageService: LanguageService) { }
  showBurger() {
    this.active = !this.active;
  }

  noShowBurger() {
    this.active = false;
  }

  changeLanguage(lang: string) {
    this.languageService.setLanguage(lang);
    if (lang === "es") {
      this.esOn = true;
      this.enOn = false;
    } else {
      this.esOn = false;
      this.enOn = true;
    }
  }
}
