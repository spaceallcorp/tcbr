import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VagasCriarComponent } from './vagas-criar.component';

describe('VagasCriarComponent', () => {
  let component: VagasCriarComponent;
  let fixture: ComponentFixture<VagasCriarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VagasCriarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VagasCriarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
