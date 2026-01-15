import { Component, EventEmitter, inject, Output, AfterViewInit, ViewChild } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router'; // 👈 Needed for fragment detection

import { Ad2Component } from '../../layout/ad2/ad2.component';

import { TranslateService, TranslatePipe } from '@ngx-translate/core'; // Inserido
import { RodapeComponent } from '../../layout/rodape/rodape.component';
import { MenuComponent } from '../../layout/menu/menu.component';
declare const UIkit: any;
@Component({
  selector: 'app-datacentersevices',
  imports: [
    Ad2Component,
    TranslatePipe, RodapeComponent, MenuComponent // Inserido
    ,
    RouterLink
],
  templateUrl: './datacentersevices.component.html',
  styleUrl: './datacentersevices.component.css'
})
export class DatacentersevicesComponent implements AfterViewInit {

  @ViewChild('servicesTabs') servicesTabs: any;
  private switcher: any;

  @Output() tabSelected = new EventEmitter<number>();

  private translate = inject(TranslateService);
  private route = inject(ActivatedRoute); // 👈 Inject Angular route

  constructor() {
    this.translate.setDefaultLang('pt');
    this.translate.use(this.translate.currentLang || 'pt');
  }


  ngAfterViewInit(): void {
    // ✅ Init UIkit switcher on the real container
    this.switcher = UIkit.switcher('.timeline-content');

    this.route.fragment.subscribe(fragment => {
      if (!fragment) return;

      // Map fragment to switcher index
      switch (fragment) {
        case 'rack-colocation':
          this.switchTab(0);
          break;
        case 'interconnectivity':
          this.switchTab(1);
          break;
        case 'remote-hands':
          this.switchTab(2);
          break;
      }

      // Scroll to fragment target
      const target = document.getElementById(fragment);
      if (target) {
        const headerOffset = 180;
        const elementPosition =
          target.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  }

  switchTab(tabIndex: number) {
    if (this.switcher) {
      this.switcher.show(tabIndex);
    }
  }

  selectTab(tabIndex: number, event: Event) {
    event.preventDefault();
    this.tabSelected.emit(tabIndex);
    this.switchTab(tabIndex);
  }

  useLanguage(language: string): void {
    this.translate.use(language);
  }

}
