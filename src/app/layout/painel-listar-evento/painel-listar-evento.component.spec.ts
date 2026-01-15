import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelListarEventoComponent } from './painel-listar-evento.component';

describe('PainelListarEventoComponent', () => {
  let component: PainelListarEventoComponent;
  let fixture: ComponentFixture<PainelListarEventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PainelListarEventoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PainelListarEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
