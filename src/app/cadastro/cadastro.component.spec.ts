import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroComponent } from './cadastro.component';

describe('CadastroComponent', () => {
    let cadastroComponent: CadastroComponent;
    //   let fixture: ComponentFixture<CadastroComponent>;

    //   beforeEach(async () => {
    //     await TestBed.configureTestingModule({
    //       declarations: [ CadastroComponent ]
    //     })
    //     .compileComponents();
    //   });

    //   beforeEach(() => {
    //     fixture = TestBed.createComponent(CadastroComponent);
    //     component = fixture.componentInstance;
    //     fixture.detectChanges();
    //   });

    it('should submit register', (done) => {
        const fakeAccountService = {
            register: () => {
                return new Promise((resolve, reject) => {
                    expect(true).toBe(true);
                    resolve();
                    done();
                });
            }
        }
        cadastroComponent = new CadastroComponent(fakeAccountService as any);
        cadastroComponent.onSubmit('name', 'abc@abc.com', '123', '123');
    });

    it('should be invalid email and unmatching passwords', (done) => {
        const fakeAccountService = {
            register: () => {
                return new Promise((resolve, reject) => {
                    expect(true).toBe(false);
                    resolve();
                    done();
                });
            }
        }
        cadastroComponent = new CadastroComponent(fakeAccountService as any);
        cadastroComponent.onSubmit('name', 'abc', '123', '321');
        expect(cadastroComponent.emailIsValid).toBe(false);
        expect(cadastroComponent.passwordsMatch).toBe(false);
        done();
    });
});
