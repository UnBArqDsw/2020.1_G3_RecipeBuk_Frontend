import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TortaMorangoComponent } from './coxinha.component.spec';

describe('CoxinhaComponent', () => {
  let component: TortaMorangoComponent;
  let fixture: ComponentFixture<TortaMorangoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TortaMorangoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TortaMorangoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
