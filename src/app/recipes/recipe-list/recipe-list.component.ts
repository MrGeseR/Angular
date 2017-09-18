import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
      new Recipe('Test', 'This is a simple test recipe', 'https://c1.staticflickr.com/1/501/31577489463_1e37b95427_b.jpg'),
      new Recipe('Another Recipe', 'This is a simple test recipe', 'https://c1.staticflickr.com/1/501/31577489463_1e37b95427_b.jpg'),
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
