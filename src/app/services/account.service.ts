import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// import  * as firebase from 'firebase' ;

import { environment } from 'src/environments/environment';
import { User } from 'src/app/models';
import { FirebaseService } from './firebase.service';

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
        console.log('lol', this.userValue);
    }

    public get userValue(): User {
        return this.userSubject.value;
    }

    login(email, password) {
        return new Promise((resolve, reject) => {
            this.firebaseService.firebase.auth().signInWithEmailAndPassword(email, password).then(()=>{
                const user = new User('', email, '');
                console.log("Usuário logado")
                localStorage.setItem('user', JSON.stringify(user));
                this.userSubject.next(user);
                resolve(user);
            }).catch(function (error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorMessage);
                reject(errorMessage);
            });
        })
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