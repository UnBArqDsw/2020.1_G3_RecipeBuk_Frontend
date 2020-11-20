import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoxinhaComponent } from './coxinha.component.spec';

describe('CoxinhaComponent', () => {
  let component: CoxinhaComponent;
  let fixture: ComponentFixture<CoxinhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoxinhaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoxinhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
