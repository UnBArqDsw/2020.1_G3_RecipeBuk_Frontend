import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/models';
import * as Cookie from 'js-cookie';

@Injectable({ providedIn: 'root' }) 
export class AccountService {
    private userSubject: BehaviorSubject<User>;
    public user: Observable<User>;

    constructor(
        private http: HttpClient,
    ) {
        this.userSubject = new BehaviorSubject<User>(null);
        this.user = this.userSubject.asObservable();
    }

    public get userValue(): User {
        return this.userSubject.value;
    }
	
	public get userSession(): string {
		return Cookie.get('USER_SESSION');
	}

    public emailIsValid (email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    }

    update(update_info) {
        return new Promise((resolve, reject) => {
            this.http.post(`${environment.apiUrl}/updateUser`, {...update_info, auth: Cookie.get('USER_SESSION')}).subscribe({
                next(res) {
                    resolve(res);
                },
                error(e) {
                    reject(e);
                }
            });
        });
    }

    login(email, password) {
        return new Promise((resolve, reject) => {
            var user = new User('', email, password);
            this.http.post(`${environment.apiUrl}/login`, user).subscribe({
                next(res : any) {
                    if(res.error)
                        reject(res);

                    else {
                        console.log("Usuário logado", res);
                        Cookie.set('USER_SESSION', res.user_session, {expires: 7, path: '/'});
                        resolve();
                    }
                },
                error(e) {
                    reject(e);
                }
            });
        });
    }

    logout() {
        return new Promise((resolve, reject) => {
            this.http.post(`${environment.apiUrl}/logout`, {auth: Cookie.get('USER_SESSION')}).subscribe({
                next(res : any) {
                    if(res.error)
                        reject(res);

                    else {
                        console.log("Usuário deslogado", res);
                        Cookie.remove('USER_SESSION', {path: '/'});
                        resolve();
                    }
                },
                error(e) {
                    reject(e);
                }
            });
        });
    }

    register(name, email, password) {
        return new Promise((resolve, reject) => {
            var user = new User(name, email, password)
            this.http.post(`${environment.apiUrl}/createUser`, user).subscribe({
                next() {
                    resolve();
                },
                error(e) {
                    reject(e)
                }
            });
        });
    }
}