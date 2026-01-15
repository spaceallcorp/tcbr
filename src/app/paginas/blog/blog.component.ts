import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';
import { MenuComponent } from '../../layout/menu/menu.component';
import { RodapeComponent } from '../../layout/rodape/rodape.component';
import { ArtigoListaComponent } from '../../layout/artigo-lista/artigo-lista.component';
@Component({
  selector: 'app-blog',
  imports: [TranslatePipe, ArtigoListaComponent, MenuComponent, RodapeComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {

      useLanguage(language: string): void {
        this.translate.use(language);
    }
    
    constructor(private translate: TranslateService) {}
    

}
