import { Component } from '@angular/core';
import { ContadorComponent } from '../contador/contador.component';
import {  TranslateService } from '@ngx-translate/core';
import {  TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-numeros',
  imports: [ContadorComponent, TranslatePipe],
  templateUrl: './numeros.component.html',
  styleUrl: './numeros.component.css'
})
export class NumerosComponent {

    useLanguage(language: string): void {
      this.translate.use(language);
  }
  
  constructor(private translate: TranslateService) {}
  

}
