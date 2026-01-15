import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosListarComponent } from './eventos-listar.component';

describe('EventosListarComponent', () => {
  let component: EventosListarComponent;
  let fixture: ComponentFixture<EventosListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventosListarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventosListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
