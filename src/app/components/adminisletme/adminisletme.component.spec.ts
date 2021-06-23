import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminisletmeComponent } from './adminisletme.component';

describe('AdminisletmeComponent', () => {
  let component: AdminisletmeComponent;
  let fixture: ComponentFixture<AdminisletmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminisletmeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminisletmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
