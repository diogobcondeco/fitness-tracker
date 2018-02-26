import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';
import { User } from "./user.model";
import { AuthData } from "./auth-data.model";
import { Injectable } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";

@Injectable()
export class AuthService {
    authChange = new Subject<boolean>();
    private user: User;

    constructor(private router: Router, private afAuth: AngularFireAuth) {

    }

    registerUser(authData: AuthData) {
        this.afAuth.auth.createUserWithEmailAndPassword(authData.email, authData.password).then(result => {
            console.log(result);
            this.authSuccessfully();
        }).catch(error => {
            console.log(error);
        })
    }

    login(authData: AuthData) {
        this.afAuth.auth.signInWithEmailAndPassword(authData.email, authData.password).then(result => {
            console.log(result);
            this.authSuccessfully();
        }).catch(error => {
            console.log(error);
        });
    }

    logout() {
        this.user = null;
        this.authChange.next(true);
        this.router.navigate(['/login']);
    }

    getUser() {
        return { ...this.user };
    }

    isAuth() {
        return this.user != null;
    }

    private authSuccessfully() {
        this.authChange.next(true);
        this.router.navigate(['/training']);
    }
}