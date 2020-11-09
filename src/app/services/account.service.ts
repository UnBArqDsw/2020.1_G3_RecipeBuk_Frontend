import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { User } from 'src/app/models';
import { FirebaseService } from './firebase.service';
// import { resolve } from 'dns';

@Injectable({ providedIn: 'root' })
export class AccountService {
    private userSubject: BehaviorSubject<User>;
    public user: Observable<User>;

    constructor(
        private http: HttpClient,
        private firebaseService: FirebaseService
    ) {
        this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
        this.user = this.userSubject.asObservable();
    }

    public get userValue(): User {
        return this.userSubject.value;
    }

    public emailIsValid (email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    }

    update(user) {
        const saveUser = (user) => {
            localStorage.setItem('user', JSON.stringify(user));
            this.userSubject.next(user);
        }

        return new Promise((resolve, reject) => {
            console.log('tan')
            this.http.post(`${environment.apiUrl}/updateUser`, user).subscribe({
                next(res) {
                    console.log('donmo')
                    saveUser(res['Message']);
                    resolve(res);
                },
                error(e) {
                    console.log('asdedmeeeee')
                    reject(e);
                }
            });
        });
    }

    login(email, password) {
        const saveUser = (user) => {
            localStorage.setItem('user', JSON.stringify(user));
            this.userSubject.next(user);
        }

        return new Promise((resolve, reject) => {
            var user = new User('', email, password);
            this.http.post(`${environment.apiUrl}/login`, user).subscribe({
                next(res) {
                    console.log("Usuário logado", res)
                    saveUser(res['Message']);
                    resolve();
                },
                error(e) {
                    reject(e);
                }
            });
        });
    }

    logout() {
        return new Promise((resolve, reject) => {
            this.firebaseService.firebase.auth().signOut().then(function () {
                localStorage.removeItem('user');
                this.userSubject.next(null);
                console.log('sign out successful')
                resolve("sign out successful");
            }).catch(function (e) {
                console.log(e);
                reject(e);
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