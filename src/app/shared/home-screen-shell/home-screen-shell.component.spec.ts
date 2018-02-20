import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeScreenShellComponent } from './home-screen-shell.component';

describe('HomeScreenShellComponent', () => {
  let component: HomeScreenShellComponent;
  let fixture: ComponentFixture<HomeScreenShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeScreenShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeScreenShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
