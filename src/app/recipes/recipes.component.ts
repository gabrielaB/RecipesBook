import { Component, OnInit } from '@angular/core';
import { RecipeService } from './recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  searchText: string;
  searchedRecipes:Recipe[];


  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  
  }
}
