import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubLogTimerComponent } from './sub-log-timer.component';

describe('SubLogTimerComponent', () => {
  let component: SubLogTimerComponent;
  let fixture: ComponentFixture<SubLogTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubLogTimerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubLogTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
