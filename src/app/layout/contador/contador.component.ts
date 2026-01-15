import { Component, Input, OnInit, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-contador',
  imports: [],
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})
export class ContadorComponent implements AfterViewInit, OnDestroy {
  @Input() startValue: number = 0;
  @Input() targetValue: number = 10;
  @Input() interval: number = 1000; // Default: 1 second


  count: number = 0;
  intervalId: any;
  observer: IntersectionObserver | null = null;

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    
    this.count = this.startValue;
    this.observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        this.startCounting();
      } else {
        this.stopCounting();
      }
    }, { threshold: 0.5 }); // Starts when at least 50% is visible

    this.observer.observe(this.elementRef.nativeElement);
  }

  startCounting() {
    if (!this.intervalId && this.count < this.targetValue) {
      this.intervalId = setInterval(() => {
        if (this.count < this.targetValue) {
          this.count++;
        } else {
          this.stopCounting();
        }
      }, this.interval);
    }
  }

  stopCounting() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  ngOnDestroy() {
    this.stopCounting();
    this.observer?.disconnect();
  }
}