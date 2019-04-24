import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item-favourite',
  templateUrl: './recipe-item-favourite.component.html',
  styleUrls: ['./recipe-item-favourite.component.css']
})
export class RecipeItemFavouriteComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() index: number;
  constructor() { }

  ngOnInit() {
  }

}
