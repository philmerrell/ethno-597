import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneShellComponent } from './phone-shell.component';

describe('PhoneShellComponent', () => {
  let component: PhoneShellComponent;
  let fixture: ComponentFixture<PhoneShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
