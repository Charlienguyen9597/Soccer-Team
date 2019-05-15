import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextFiveMatchComponent } from './next-five-match.component';

describe('NextFiveMatchComponent', () => {
  let component: NextFiveMatchComponent;
  let fixture: ComponentFixture<NextFiveMatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextFiveMatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextFiveMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
