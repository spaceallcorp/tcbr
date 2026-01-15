import { Component } from '@angular/core';
import {  TranslateService } from '@ngx-translate/core';
import { TranslatePipe } from '@ngx-translate/core';


@Component({
  selector: 'app-caracteristicas',
  imports: [ TranslatePipe],
  templateUrl: './caracteristicas.component.html',
  styleUrl: './caracteristicas.component.css'
})
export class CaracteristicasComponent {

  constructor (private translate: TranslateService) {}
  useLanguage(language: string): void {
    this.translate.use(language);
}


}
