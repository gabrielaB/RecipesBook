import { Component, OnInit, AfterContentInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit,AfterContentInit {
  recipe: Recipe;
  recipes: Recipe[];
  id: number;

  constructor(private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    this.recipeService.getRecipe(this.id);
    this.route.params
      .subscribe(
        (params: Params) => {
          console.log(params)
          this.id = params['id'];
        }
      )
  }

  ngAfterContentInit(){
    this.recipeService.getRecipes()
    .subscribe(res => {
      this.recipe = res.recipes[this.id];
      console.log(this.recipe)
    })
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe() {
    // this.router.navigate(['edit'], { relativeTo: this.route });
    this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

}
