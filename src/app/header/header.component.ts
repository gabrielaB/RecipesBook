import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthGuard } from '../auth/auth-guard.service';
import { RecipeService } from '../recipes/recipe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  @Output() selectedComponent = new EventEmitter<string>();

  constructor(private recipeService: RecipeService,
    private authService: AuthService,
    private guard:AuthGuard) {
  }

  ngOnInit(){
    this.recipeService.getRecipes();
  }

  featureSelected(feature: string) {
    this.selectedComponent.emit(feature);
  }

  onLogout() {
    this.authService.logout();
  }
}
