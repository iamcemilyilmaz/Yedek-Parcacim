import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrunlisteleComponent } from './urunlistele.component';

describe('UrunlisteleComponent', () => {
  let component: UrunlisteleComponent;
  let fixture: ComponentFixture<UrunlisteleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrunlisteleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UrunlisteleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
