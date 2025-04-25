import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Car4Page } from './car4.page';

describe('Car4Page', () => {
  let component: Car4Page;
  let fixture: ComponentFixture<Car4Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Car4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
