import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TortaFrangoComponent } from './torta-frango.component';

describe('TortaFrangoComponent', () => {
  let component: TortaFrangoComponent;
  let fixture: ComponentFixture<TortaFrangoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TortaFrangoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TortaFrangoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
