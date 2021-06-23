import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrunsilComponent } from './urunsil.component';

describe('UrunsilComponent', () => {
  let component: UrunsilComponent;
  let fixture: ComponentFixture<UrunsilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrunsilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UrunsilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
