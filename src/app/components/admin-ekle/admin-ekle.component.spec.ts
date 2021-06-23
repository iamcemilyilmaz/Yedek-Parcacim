import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEkleComponent } from './admin-ekle.component';

describe('AdminEkleComponent', () => {
  let component: AdminEkleComponent;
  let fixture: ComponentFixture<AdminEkleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEkleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEkleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
