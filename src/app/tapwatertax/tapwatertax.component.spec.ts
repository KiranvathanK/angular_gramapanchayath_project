import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TapwatertaxComponent } from './tapwatertax.component';

describe('TapwatertaxComponent', () => {
  let component: TapwatertaxComponent;
  let fixture: ComponentFixture<TapwatertaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TapwatertaxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TapwatertaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
