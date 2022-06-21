import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubShowTimerComponent } from './sub-show-timer.component';

describe('SubShowTimerComponent', () => {
  let component: SubShowTimerComponent;
  let fixture: ComponentFixture<SubShowTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubShowTimerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubShowTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
