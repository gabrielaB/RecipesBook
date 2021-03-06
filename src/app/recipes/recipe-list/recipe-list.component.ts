import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { AuthGuard } from 'src/app/auth/auth-guard.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];
  searchText: string;

  constructor(private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute,
    private guard: AuthGuard) {
  }

  ngOnInit() {
    this.searchText = this.route
      .snapshot
      .params['search'];

    this.recipeService.getRecipes()
      .subscribe(res => {
        if (this.searchText != undefined) {
          this.recipeService.getRecipes()
            .subscribe(res => {
              this.recipes = res.recipes
                .filter(r => r.name.includes(this.searchText))
            })
        } else {
          this.recipeService.getRecipes()
            .subscribe(res => {
              this.recipes = res.recipes;             
            })
        }
      })

  }

  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  test(index) {

  }
}
