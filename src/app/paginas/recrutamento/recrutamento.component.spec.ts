import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecrutamentoComponent } from './recrutamento.component';

describe('RecrutamentoComponent', () => {
  let component: RecrutamentoComponent;
  let fixture: ComponentFixture<RecrutamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecrutamentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecrutamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
