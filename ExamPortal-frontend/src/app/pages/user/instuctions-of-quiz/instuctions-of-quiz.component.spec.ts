import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstuctionsOfQuizComponent } from './instuctions-of-quiz.component';

describe('InstuctionsOfQuizComponent', () => {
  let component: InstuctionsOfQuizComponent;
  let fixture: ComponentFixture<InstuctionsOfQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstuctionsOfQuizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstuctionsOfQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
