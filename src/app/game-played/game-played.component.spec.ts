import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamePlayedComponent } from './game-played.component';

describe('GamePlayedComponent', () => {
  let component: GamePlayedComponent;
  let fixture: ComponentFixture<GamePlayedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamePlayedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamePlayedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
