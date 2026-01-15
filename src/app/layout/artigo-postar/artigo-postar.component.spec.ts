import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtigoPostarComponent } from './artigo-postar.component';

describe('ArtigoPostarComponent', () => {
  let component: ArtigoPostarComponent;
  let fixture: ComponentFixture<ArtigoPostarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtigoPostarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtigoPostarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
