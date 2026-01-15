import { Component, inject } from '@angular/core';
import { MenuComponent } from '../../layout/menu/menu.component';
import { RodapeComponent } from '../../layout/rodape/rodape.component';
import { EventosListarComponent } from '../../layout/eventos-listar/eventos-listar.component';
import { PaineisListarComponent } from "../../layout/paineis-listar/paineis-listar.component";

import { TranslateService, TranslatePipe } from '@ngx-translate/core'; // Inserido

@Component({
  selector: 'app-eventos-ac',
  imports: [
    MenuComponent,
    RodapeComponent,
    EventosListarComponent,
    PaineisListarComponent,
    TranslatePipe // Inserido
],
  templateUrl: './eventos-ac.component.html',
  styleUrl: './eventos-ac.component.css'
})
export class EventosAcComponent {

  private translate = inject(TranslateService); // Inserido

  constructor() { // Construtor adicionado/modificado para incluir a lógica de tradução
    this.translate.setDefaultLang('pt'); // Inserido
    this.translate.use(this.translate.currentLang || 'pt'); // Inserido
  }

  useLanguage(language: string): void { // Inserido
    this.translate.use(language); // Inserido
  } // Inserido
}