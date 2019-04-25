import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject, Observable } from 'rxjs';
import 'rxjs/Rx';
import { Http } from '@angular/http';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [];

  constructor(
    private slService: ShoppingListService,
    private http: Http
    ) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());

  }

  getRecipes(){
   return this.http.get('https://recipesbook-60df9.firebaseio.com/recipes.json') 
   .map(response => response.json())
  }

  getRecipe(index: number) {
    this.http.get('https://recipesbook-60df9.firebaseio.com/recipes.json') 
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
    // this.firestore.doc('recipes/' + index).update(newRecipe).then(r => console.log(r));
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
