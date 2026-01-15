import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualizacaoComponent } from './virtualizacao.component';

describe('VirtualizacaoComponent', () => {
  let component: VirtualizacaoComponent;
  let fixture: ComponentFixture<VirtualizacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VirtualizacaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VirtualizacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
