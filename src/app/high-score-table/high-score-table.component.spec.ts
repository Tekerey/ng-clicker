import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighScoreTableComponent } from './high-score-table.component';

describe('HighScoreTableComponent', () => {
  let component: HighScoreTableComponent;
  let fixture: ComponentFixture<HighScoreTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighScoreTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HighScoreTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
