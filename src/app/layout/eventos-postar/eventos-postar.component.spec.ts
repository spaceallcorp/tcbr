import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosPostarComponent } from './eventos-postar.component';

describe('EventosPostarComponent', () => {
  let component: EventosPostarComponent;
  let fixture: ComponentFixture<EventosPostarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventosPostarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventosPostarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
