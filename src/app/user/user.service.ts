import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class UserService {

  constructor(
    private http: Http,
    ) {}

  getUsers() {
  return this.http.get('https://recipesbook-60df9.firebaseio.com/users.json') 
   .map(response => response.json());
  }
}
