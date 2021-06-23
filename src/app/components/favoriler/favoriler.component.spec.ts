import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavorilerComponent } from './favoriler.component';

describe('FavorilerComponent', () => {
  let component: FavorilerComponent;
  let fixture: ComponentFixture<FavorilerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavorilerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavorilerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
