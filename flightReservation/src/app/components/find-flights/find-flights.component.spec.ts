import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindFlightsComponent } from './find-flights.component';

describe('FindFlightsComponent', () => {
  let component: FindFlightsComponent;
  let fixture: ComponentFixture<FindFlightsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FindFlightsComponent]
    });
    fixture = TestBed.createComponent(FindFlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
