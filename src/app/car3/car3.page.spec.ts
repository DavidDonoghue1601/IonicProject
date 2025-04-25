import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Car3Page } from './car3.page';

describe('Car3Page', () => {
  let component: Car3Page;
  let fixture: ComponentFixture<Car3Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Car3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
