import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuComponent } from '../../layout/menu/menu.component';
import { RodapeComponent } from '../../layout/rodape/rodape.component';
import { TranslatePipe } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-termsandconditions',
  imports: [RouterLink, MenuComponent, TranslatePipe, RodapeComponent],
  templateUrl: './termsandconditions.component.html',
  styleUrl: './termsandconditions.component.css'
})
export class TermsandconditionsComponent {

private translate = inject(TranslateService)

  useLanguage(language: string): void {
    this.translate.use(language);
  }

  

}
