import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultSoFarComponent } from './result-so-far.component';

describe('ResultSoFarComponent', () => {
  let component: ResultSoFarComponent;
  let fixture: ComponentFixture<ResultSoFarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultSoFarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultSoFarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
