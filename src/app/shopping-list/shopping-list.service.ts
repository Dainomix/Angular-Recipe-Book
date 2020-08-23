import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";

import { Ingredient } from "../shared/ingredient.model";

@Injectable()
export class ShoppingListService {

    ingredientsChanged = new Subject<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apple', 5),
        new Ingredient('Tomato', 10),
      ];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient:Ingredient) {
        this.ingredients.push(ingredient);
        // Inform ingredients array changed
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredients:Ingredient[]) {    
        // for(let ingredient of ingredients) {
        //     this.addIngredient(ingredient);
        // }

        // ... spread operator(ES6)
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    
}