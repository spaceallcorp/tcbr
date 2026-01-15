import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatacentersevicesComponent } from './datacentersevices.component';

describe('DatacentersevicesComponent', () => {
  let component: DatacentersevicesComponent;
  let fixture: ComponentFixture<DatacentersevicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatacentersevicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatacentersevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
