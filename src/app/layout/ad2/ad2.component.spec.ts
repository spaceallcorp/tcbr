import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ad2Component } from './ad2.component';

describe('Ad2Component', () => {
  let component: Ad2Component;
  let fixture: ComponentFixture<Ad2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ad2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ad2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
