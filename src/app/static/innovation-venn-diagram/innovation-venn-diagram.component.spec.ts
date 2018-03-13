import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnovationVennDiagramComponent } from './innovation-venn-diagram.component';

describe('InnovationVennDiagramComponent', () => {
  let component: InnovationVennDiagramComponent;
  let fixture: ComponentFixture<InnovationVennDiagramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnovationVennDiagramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnovationVennDiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
