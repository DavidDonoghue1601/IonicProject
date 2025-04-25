import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Car2Page } from './car2.page';

describe('Car2Page', () => {
  let component: Car2Page;
  let fixture: ComponentFixture<Car2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Car2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
