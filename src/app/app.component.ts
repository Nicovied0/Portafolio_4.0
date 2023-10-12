import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portafolio-4.0';

  constructor(private translate: TranslateService) {
    translate.addLangs(['es', 'en'])
    translate.setDefaultLang('es'); // Establece el idioma predeterminado
    translate.use('es'); // Usa el idioma inglés
  }
}
  