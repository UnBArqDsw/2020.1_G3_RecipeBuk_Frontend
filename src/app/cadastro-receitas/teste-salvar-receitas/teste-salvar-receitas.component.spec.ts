import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteSalvarReceitasComponent } from './teste-salvar-receitas.component';

describe('TesteSalvarReceitasComponent', () => {
  let component: TesteSalvarReceitasComponent;
  let fixture: ComponentFixture<TesteSalvarReceitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TesteSalvarReceitasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TesteSalvarReceitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
