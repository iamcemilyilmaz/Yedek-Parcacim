import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrunkayitComponent } from './urunkayit.component';

describe('UrunkayitComponent', () => {
  let component: UrunkayitComponent;
  let fixture: ComponentFixture<UrunkayitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrunkayitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UrunkayitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
