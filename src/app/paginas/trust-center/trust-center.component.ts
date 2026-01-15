import { Component, AfterViewInit, inject } from '@angular/core';
import { MenuComponent } from '../../layout/menu/menu.component';
import { RodapeComponent } from '../../layout/rodape/rodape.component';
import { CaracteristicasComponent } from '../../layout/caracteristicas/caracteristicas.component';

import { TranslateService, TranslatePipe } from '@ngx-translate/core'; // Inserido

@Component({
  selector: 'app-trust-center',
  imports: [MenuComponent, RodapeComponent, CaracteristicasComponent, TranslatePipe], // Inserido
  templateUrl: './trust-center.component.html',
  styleUrl: './trust-center.component.css'
})
export class TrustCenterComponent implements AfterViewInit {

  private translate = inject(TranslateService); // Inserido

  constructor() { // Construtor adicionado/modificado para incluir a lógica de tradução
    this.translate.setDefaultLang('pt'); // Inserido
    this.translate.use(this.translate.currentLang || 'pt'); // Inserido
  }

  ngAfterViewInit(): void {
    const sliderInner = document.querySelector('.slider-inner') as HTMLElement;
    const images = sliderInner.innerHTML;

    // Duplicate the images
    sliderInner.innerHTML += images; // Append the same images for a seamless effect
  }

  useLanguage(language: string): void { // Inserido
    this.translate.use(language); // Inserido
  } // Inserido
}