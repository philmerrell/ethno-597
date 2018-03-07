import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerJourneyMapComponent } from './customer-journey-map.component';

describe('CustomerJourneyMapComponent', () => {
  let component: CustomerJourneyMapComponent;
  let fixture: ComponentFixture<CustomerJourneyMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerJourneyMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerJourneyMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
