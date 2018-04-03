import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoomiFilterDialogComponent } from './boomi-filter-dialog.component';

describe('BoomiFilterDialogComponent', () => {
  let component: BoomiFilterDialogComponent;
  let fixture: ComponentFixture<BoomiFilterDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoomiFilterDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoomiFilterDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
