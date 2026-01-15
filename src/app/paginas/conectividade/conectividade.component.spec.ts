import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConectividadeComponent } from './conectividade.component';

describe('ConectividadeComponent', () => {
  let component: ConectividadeComponent;
  let fixture: ComponentFixture<ConectividadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConectividadeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConectividadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
