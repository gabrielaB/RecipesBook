import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';
import { UserComponent } from '../user/user.component';
import { UserService } from '../user/user.service';
import { User } from '../user/user.model';

@Injectable()
export class AuthService {
  token: string;
  user: User;
  isAdmin=false;

  constructor(
    private router: Router,
    private userService: UserService) { }


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
        (response) => {
         
          this.router.navigate(['/home']);
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

  isUserAdmin() {

    this.userService.getUsers()
      .subscribe(res => {
        for (let u of res.users) {
          if (u.uid === firebase.auth().currentUser.uid) {
            this.user = u;
            if(u.isAdmin){
            this.isAdmin = true;
            }else{
             this.isAdmin= false;
            }
          }
        }
      })
      return this.isAdmin;
  }
}
