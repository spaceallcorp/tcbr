import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasPostarComponent } from './noticias-postar.component';

describe('NoticiasPostarComponent', () => {
  let component: NoticiasPostarComponent;
  let fixture: ComponentFixture<NoticiasPostarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoticiasPostarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoticiasPostarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
