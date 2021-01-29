import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPlayComponent } from './app-play.component';

describe('AppPlayComponent', () => {
  let component: AppPlayComponent;
  let fixture: ComponentFixture<AppPlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppPlayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
