import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RodapeComponent } from '../../layout/rodape/rodape.component';
import { MenuComponent } from '../../layout/menu/menu.component';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-privacypolicy',
  imports: [RouterLink, RodapeComponent, TranslatePipe, MenuComponent],
  templateUrl: './privacypolicy.component.html',
  styleUrl: './privacypolicy.component.css'
})
export class PrivacypolicyComponent {

  
private translate = inject(TranslateService)

  useLanguage(language: string): void {
    this.translate.use(language);
  }

}
