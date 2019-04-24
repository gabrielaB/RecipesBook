import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';
import { UserComponent } from '../user/user.component';

@Injectable()
export class AuthService {
  token: string;
  user: UserComponent;

  constructor(
    private router: Router
   ) {
  }


signupUser(email: string, password: string) {
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then(r => {
    this.router.navigate(['/signin']);
  })
    .catch(
      error => console.log(error)
    )
}

signinUser(email: string, password: string) {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(
      response => {
        this.router.navigate(['/user']);
      
        firebase.auth().currentUser.getIdToken()
          .then(
            (token: string) => this.token = token
          )
      }
    )
    .catch(
      error => console.log(error)
    );
}

logout() {
  firebase.auth().signOut();
  this.token = null;
  this.router.navigate(['/home']);
}

getToken() {
  firebase.auth().currentUser.getIdToken()
    .then(
      (token: string) => this.token = token
    );
  return this.token;
}

isAuthenticated() {
  return this.token != null;
}
}
