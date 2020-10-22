import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let loginComponent: LoginComponent;

  it('should submit login', (done) => {
    const fakeAccountService = {
      login: () => {
        return new Promise((resolve, reject) => {
          expect(true).toBe(true);
          resolve();
          done();
        });
      }
    }

    loginComponent = new LoginComponent(fakeAccountService as any);
    loginComponent.onSubmit('abc@abc.com', '123');
  });

  it('should be invalid email', (done) => {
    const fakeAccountService = {
      login: () => {
        return new Promise((resolve, reject) => {
          expect(true).toBe(false);
          resolve();
          done();
        });
      }
    }

    loginComponent = new LoginComponent(fakeAccountService as any);
    loginComponent.onSubmit('abc', '123');
    expect(loginComponent.emailIsValid).toBe(false);
    done();
  });
});
