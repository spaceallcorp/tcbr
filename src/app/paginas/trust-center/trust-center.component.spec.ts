import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrustCenterComponent } from './trust-center.component';

describe('TrustCenterComponent', () => {
  let component: TrustCenterComponent;
  let fixture: ComponentFixture<TrustCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrustCenterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrustCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
