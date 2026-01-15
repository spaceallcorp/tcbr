import { Component } from '@angular/core';
import { MenuComponent } from '../../layout/menu/menu.component';
import { RodapeComponent } from '../../layout/rodape/rodape.component';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { Ad2Component } from "../../layout/ad2/ad2.component";
import { SlideshowComponent } from '../../layout/slideshow/slideshow.component';
import { NoticiasListarComponent } from '../../layout/noticias-listar/noticias-listar.component';
import { EventosListarComponent } from '../../layout/eventos-listar/eventos-listar.component';
import { ParceirosComponent } from "../../layout/parceiros/parceiros.component";

@Component({
  selector: 'app-acerca',
  imports: [
    MenuComponent,
    RodapeComponent, TranslatePipe, NoticiasListarComponent, EventosListarComponent,
    Ad2Component, SlideshowComponent,
    ParceirosComponent
],
  templateUrl: './acerca.component.html',
  styleUrl: './acerca.component.css'
})
export class AcercaComponent {


      useLanguage(language: string): void {
            this.translate.use(language);
        }
        
        constructor(private translate: TranslateService) {}

        languages = [
          { code: 'pt', name: 'PT', flag: 'assets/flags/pt-flag.svg' },
          { code: 'en', name: 'EN', flag: 'assets/flags/us-flag.svg' },
          // Add more languages as needed
          { code: 'fr', name: 'FR', flag: 'assets/flags/fr-flag.svg' },
          { code: 'es', name: 'ES', flag: 'assets/flags/es-flag.svg' }
        ];
      
        selectedLanguage = this.languages[0]; // Default to first language
      
        onLanguageChange(event: Event) {
          const select = event.target as HTMLSelectElement;
          const langCode = select.value;
          const foundLang = this.languages.find(l => l.code === langCode);
          if (foundLang) {
            this.selectedLanguage = foundLang;
          }
        }
      

}
