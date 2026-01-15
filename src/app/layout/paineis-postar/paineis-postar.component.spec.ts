import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaineisPostarComponent } from './paineis-postar.component';

describe('PaineisPostarComponent', () => {
  let component: PaineisPostarComponent;
  let fixture: ComponentFixture<PaineisPostarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaineisPostarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaineisPostarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
