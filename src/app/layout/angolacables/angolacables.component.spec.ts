import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngolacablesComponent } from './angolacables.component';

describe('AngolacablesComponent', () => {
  let component: AngolacablesComponent;
  let fixture: ComponentFixture<AngolacablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngolacablesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngolacablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
