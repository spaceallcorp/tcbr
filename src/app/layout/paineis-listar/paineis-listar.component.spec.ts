import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaineisListarComponent } from './paineis-listar.component';

describe('PaineisListarComponent', () => {
  let component: PaineisListarComponent;
  let fixture: ComponentFixture<PaineisListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaineisListarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaineisListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
