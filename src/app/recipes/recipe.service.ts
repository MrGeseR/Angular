import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Test', 'This is a simple test recipe', 'https://c1.staticflickr.com/1/501/31577489463_1e37b95427_b.jpg'),
        new Recipe('Another Recipe', 'This is a simple test recipe', 'https://c1.staticflickr.com/1/501/31577489463_1e37b95427_b.jpg'),
    ];

  constructor() { }

  getRecipes() {
      return this.recipes.slice();
  }

}
