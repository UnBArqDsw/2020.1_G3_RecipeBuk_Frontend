import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceitassComponent } from './receitass.component';

describe('ReceitassComponent', () => {
  let component: ReceitassComponent;
  let fixture: ComponentFixture<ReceitassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceitassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceitassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
