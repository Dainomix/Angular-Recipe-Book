import { EventEmitter } from "@angular/core";

import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";

export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
          'Tasty Schnitzel',
          'A super-tasty Schnitzel - just awsome!', 
          'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
          [
            new Ingredient('Meat',1),
            new Ingredient('French Fries', 20)
          ]),
        new Recipe(
          'Big Fat Burger',
          'What else you need to say?', 
          'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
          [
            new Ingredient('Buns', 2),
            new Ingredient('Meat', 1)
          ]
        ),
        new Recipe(
          'A Test Reipe 3',
          'This is simply a test', 
          'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Recipe_logo.jpeg/600px-Recipe_logo.jpeg',
          [
            new Ingredient('Test Ingredients', 10)
          ]
        ),
      ];
    
    getRecipe() {
        return this.recipes.slice();    // return copy of recipe array.
    }

    
}