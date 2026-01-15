import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosAcComponent } from './eventos-ac.component';

describe('EventosAcComponent', () => {
  let component: EventosAcComponent;
  let fixture: ComponentFixture<EventosAcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventosAcComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventosAcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
