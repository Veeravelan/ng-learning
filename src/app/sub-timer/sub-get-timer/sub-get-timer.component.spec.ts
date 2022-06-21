import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubGetTimerComponent } from './sub-get-timer.component';

describe('SubGetTimerComponent', () => {
  let component: SubGetTimerComponent;
  let fixture: ComponentFixture<SubGetTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubGetTimerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubGetTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
