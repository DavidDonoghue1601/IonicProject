import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Car1Page } from './car1.page';

describe('Car1Page', () => {
  let component: Car1Page;
  let fixture: ComponentFixture<Car1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Car1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
