import { Recipe } from "./recipe.model";

export class RecipeService {

    private recipes: Recipe[] = [
        new Recipe(
          'A Test Reipe', 'This is simply a test', 
          'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Recipe_logo.jpeg/600px-Recipe_logo.jpeg'
        ),
        new Recipe(
          'Another Test Reipe', 'This is simply a test', 
          'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Recipe_logo.jpeg/600px-Recipe_logo.jpeg'
        ),
        new Recipe(
          'A Test Reipe 3', 'This is simply a test', 
          'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Recipe_logo.jpeg/600px-Recipe_logo.jpeg'
        ),
      ];
    
    getRecipe() {
        return this.recipes.slice();    // return copy of recipe array.
    }
}