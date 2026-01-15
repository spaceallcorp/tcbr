import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelcablesComponent } from './telcables.component';

describe('TelcablesComponent', () => {
  let component: TelcablesComponent;
  let fixture: ComponentFixture<TelcablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelcablesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelcablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
