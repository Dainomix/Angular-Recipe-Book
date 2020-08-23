import { Injectable } from "@angular/core";

import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
    
  /*
     * this is not decorated with @output and not part of a component which would be a totally different use case
     * so since we instead use that for cross component communication through a service, we should replace this with a Subject
     * recipeSelected = new Subject<Recipe>(); 
     * 
     * but if we would use it as we did before, so where we would use that to select different recipes,
     * we sould use it as a subject.
     */

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

    constructor(private slService:ShoppingListService) {}
    
    getRecipes() {
        return this.recipes.slice();    // return copy of recipe array.
    }


    getRecipe(index:number) {
      // this.recipes.slice()[index];
      return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients:Ingredient[]) {
      this.slService.addIngredients(ingredients);
    }
   
}