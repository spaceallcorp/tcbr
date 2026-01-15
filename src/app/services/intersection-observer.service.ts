import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IntersectionObserverService {
  private observer: IntersectionObserver;

  constructor() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const callback = (entry.target as any)._onIntersect;
          if (callback) {
            callback();
            this.observer.unobserve(entry.target);
          }
        }
      });
    }, { threshold: 0.5 });
  }

  observe(element: HTMLElement, callback: () => void): void {
    (element as any)._onIntersect = callback;
    this.observer.observe(element);
  }
}
