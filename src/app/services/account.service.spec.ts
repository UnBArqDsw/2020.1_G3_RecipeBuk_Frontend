import { AccountService } from './account.service';

describe('AccountService', () => {
    let accountService: AccountService;

    beforeEach(async () => { });

    it('Should login', (done) => {
        const fakeFirebase = {
            firebase: {
                auth: () => {
                    return {signInWithEmailAndPassword: (email, password) => {
                        return new Promise((resolve, reject) => {
                            resolve();
                        })
                    }}
                }
            }
        }
        const httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);

        accountService = new AccountService(httpClientSpy as any, fakeFirebase as any);
        accountService.login('email', 'password').then((result) => {
            expect(result).toBe("Usuário logado");
            done();
        }).catch((e) => {
            expect(e).toBe(false);
            done();
        })
    });

    it('Should not login', (done) => {
        const fakeFirebase = {
            firebase: {
                auth: () => {
                    return {signInWithEmailAndPassword: (email, password) => {
                        return new Promise((resolve, reject) => {
                            reject('e');
                        })
                    }}
                }
            }
        }
        const httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);

        accountService = new AccountService(httpClientSpy as any, fakeFirebase as any);
        accountService.login('email', 'password').then((result) => {
            expect(true).toBe(false);
            done();
        }).catch((e) => {
            expect(e).toBe(e);
            done();
        })
    });

    it('Should logout', (done) => {
        const fakeFirebase = {
            firebase: {
                auth: () => {
                    return {signOut: () => {
                        return new Promise((resolve, reject) => {
                            resolve();
                        })
                    }}
                }
            }
        }
        const httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);

        accountService = new AccountService(httpClientSpy as any, fakeFirebase as any);
        accountService.logout().then((result) => {
            expect(result).toBe("sign out successful");
            done();
        }).catch((e) => {
            expect(true).toBe(false);
            done();
        });
    });

    it('Should not logout', (done) => {
        const fakeFirebase = {
            firebase: {
                auth: () => {
                    return {signOut: () => {
                        return new Promise((resolve, reject) => {
                            reject();
                        })
                    }}
                }
            }
        }
        const httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);

        accountService = new AccountService(httpClientSpy as any, fakeFirebase as any);
        accountService.logout().then((result) => {
            expect(true).toBe(false);
            done();
        }).catch((e) => {
            expect(e).toBe(e);
            done();
        });
    });

    it('Should register', () => {
        const fakeHttpClient = {
            post: () => {
                return 
            }
        }
        const firebaseSpy = jasmine.createSpyObj('FirebaseService', ['lol']);

        accountService = new AccountService(fakeHttpClient as any, firebaseSpy as any);

        accountService.register('name', 'email', 'password');
    });
});
