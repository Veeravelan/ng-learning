import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubClickCountsComponent } from './sub-click-counts.component';

describe('SubClickCountsComponent', () => {
  let component: SubClickCountsComponent;
  let fixture: ComponentFixture<SubClickCountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubClickCountsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubClickCountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
