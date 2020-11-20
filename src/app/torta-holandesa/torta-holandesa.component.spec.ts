import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TortaHolandesaComponent } from './torta-holandesa.component';

describe('TortaHolandesaComponent', () => {
  let component: TortaHolandesaComponent;
  let fixture: ComponentFixture<TortaHolandesaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TortaHolandesaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TortaHolandesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
