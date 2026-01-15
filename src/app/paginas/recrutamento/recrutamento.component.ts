import { Component, inject } from '@angular/core';
import { MenuComponent } from '../../layout/menu/menu.component';
import { RodapeComponent } from '../../layout/rodape/rodape.component';
import { VagasListarComponent } from '../../layout/vagas-listar/vagas-listar.component';

import { TranslateService, TranslatePipe } from '@ngx-translate/core'; // Inserido

@Component({
  selector: 'app-recrutamento',
  imports: [
    MenuComponent,
    RodapeComponent,
    VagasListarComponent,
    TranslatePipe // Inserido
  ],
  templateUrl: './recrutamento.component.html',
  styleUrl: './recrutamento.component.css'
})
export class RecrutamentoComponent {

  private translate = inject(TranslateService); // Inserido

  constructor() { // Construtor adicionado/modificado para incluir a lógica de tradução
    this.translate.setDefaultLang('pt'); // Inserido
    this.translate.use(this.translate.currentLang || 'pt'); // Inserido
  }

  useLanguage(language: string): void { // Inserido
    this.translate.use(language); // Inserido
  } // Inserido
}