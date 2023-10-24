import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerDetailsComponent } from './passenger-details.component';

describe('PassengerDetailsComponent', () => {
  let component: PassengerDetailsComponent;
  let fixture: ComponentFixture<PassengerDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PassengerDetailsComponent]
    });
    fixture = TestBed.createComponent(PassengerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
