import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';
import { User } from './user.model';
import * as firebase from 'firebase/app';
import { Recipe } from '../recipes/recipe.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  users: User[]
  user: User;
  recipes: Recipe[];

  constructor(
    private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe(res => {
        for (let u of res.users) {
          if (u.uid === firebase.auth().currentUser.uid) {
               this.user = u;
          }
        }
        if(this.user.recipes != undefined && this.user.recipes.length){
          this.recipes = this.user.recipes
     }
      })
  }
}
