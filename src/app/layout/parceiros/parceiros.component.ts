import { Component, AfterViewInit } from '@angular/core';
import {  TranslateService } from '@ngx-translate/core';
import {  TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-parceiros',
  imports: [
    TranslatePipe
  ],
  templateUrl: './parceiros.component.html',
  styleUrl: './parceiros.component.css'
})
export class ParceirosComponent implements AfterViewInit {

  
    constructor (private translate: TranslateService) {}
    useLanguage(language: string): void {
      this.translate.use(language);
  }

  ngAfterViewInit(): void {
    const sliderInner = document.querySelector('.slider-inner') as HTMLElement;
    
    // Clone all images and append them for seamless loop
    if (sliderInner) {
      sliderInner.innerHTML += sliderInner.innerHTML;
    }
  }

}
