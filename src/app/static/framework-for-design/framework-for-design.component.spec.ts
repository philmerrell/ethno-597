import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameworkForDesignComponent } from './framework-for-design.component';

describe('FrameworkForDesignComponent', () => {
  let component: FrameworkForDesignComponent;
  let fixture: ComponentFixture<FrameworkForDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrameworkForDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameworkForDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
