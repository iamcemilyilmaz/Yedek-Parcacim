import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUrunComponent } from './admin-urun.component';

describe('AdminUrunComponent', () => {
  let component: AdminUrunComponent;
  let fixture: ComponentFixture<AdminUrunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUrunComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUrunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
