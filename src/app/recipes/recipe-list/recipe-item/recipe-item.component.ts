import { Component, OnInit, Input } from '@angular/core';
import * as firebase from 'firebase/app';
import { Recipe } from '../../recipe.model';
import { AuthGuard } from 'src/app/auth/auth-guard.service';
import { UserService } from 'src/app/user/user.service';
import { User } from 'src/app/user/user.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() index: number;
  myRecipes: Recipe[];
  user:User;

  constructor(private guard: AuthGuard,
    private userService: UserService){
  }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe(res => {
        console.log(res)
        for (let u of res.users) {
          if (u.uid === firebase.auth().currentUser.uid) {
               this.user = u;
          }
        }
        this.myRecipes = this.user.recipes
      })
  }
  saveAsFavourite(recipe){
    this.myRecipes.push(recipe);
  }
}
