import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertytaxComponent } from './propertytax.component';

describe('PropertytaxComponent', () => {
  let component: PropertytaxComponent;
  let fixture: ComponentFixture<PropertytaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertytaxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertytaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
