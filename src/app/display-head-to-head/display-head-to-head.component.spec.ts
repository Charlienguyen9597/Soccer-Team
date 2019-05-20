import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayHeadToHeadComponent } from './display-head-to-head.component';

describe('DisplayHeadToHeadComponent', () => {
  let component: DisplayHeadToHeadComponent;
  let fixture: ComponentFixture<DisplayHeadToHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayHeadToHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayHeadToHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
