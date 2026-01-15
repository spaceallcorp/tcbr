import { Component, inject } from '@angular/core';
import { Ad2Component } from '../../layout/ad2/ad2.component';
import { MenuComponent } from '../../layout/menu/menu.component';
import { RodapeComponent } from '../../layout/rodape/rodape.component';

import { TranslateService, TranslatePipe } from '@ngx-translate/core'; // Inserido
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-seguranca',
  imports: [RouterLink, Ad2Component, MenuComponent, RodapeComponent, Ad2Component, TranslatePipe], // Inserido
  templateUrl: './seguranca.component.html',
  styleUrl: './seguranca.component.css'
})
export class SegurancaComponent {

  private translate = inject(TranslateService); // Inserido

  constructor() { // Construtor adicionado/modificado para incluir a lógica de tradução
    this.translate.setDefaultLang('pt'); // Inserido
    this.translate.use(this.translate.currentLang || 'pt'); // Inserido
  }

  useLanguage(language: string): void { // Inserido
    this.translate.use(language); // Inserido
  } // Inserido
}