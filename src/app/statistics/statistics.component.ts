import { Component, OnInit } from '@angular/core';
import { User } from '../user/user.model';
import { Recipe } from '../recipes/recipe.model';
import { UserService } from '../user/user.service';
import { RecipeService } from '../recipes/recipe.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  users: User[];
  recipes: Recipe[];
  count:number;

  constructor(private recipeService: RecipeService,
    private userService: UserService) { }

  ngOnInit() {
    this.recipeService.getRecipes()
      .subscribe(res => {
        this.recipeService.getRecipes()
          .subscribe(res => {
            this.recipes = res.recipes;
            this.count = this.recipes.length;
          })
      });

      this.userService.getUsers()
      .subscribe(res => {
           this.users = res.users
        })
  }
}
