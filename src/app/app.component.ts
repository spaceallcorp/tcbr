import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TranslateModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tcng';

  constructor(private translate: TranslateService) {

    // Idiomas disponíveis no site
    this.translate.addLangs(['pt', 'en', 'fr']);

    // ✅ Português como idioma padrão
    this.translate.setDefaultLang('pt');

    // Detectar idioma do navegador
    const browserLang = this.translate.getBrowserLang();

    // Usar apenas se for um dos suportados
    if (browserLang && ['pt', 'en', 'fr'].includes(browserLang)) {
      this.translate.use(browserLang);
    } else {
      this.translate.use('pt'); // fallback garantido
    }
  }

  // Troca manual de idioma (botões, menu, etc.)
  switchLang(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('lang', lang); // opcional: guardar preferência
  }
}
