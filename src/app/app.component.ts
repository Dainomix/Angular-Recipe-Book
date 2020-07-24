import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Recipe-Book';

  /* Challenge: Adding Navigation function with Event Binding and ngIf */   
  showRecipe: boolean = true;
  showShoppingList: boolean = true;

  onDisplayRecipeBook(displayOption: {isDisplayRecipe:boolean, isDisplayShoppingList: boolean}) {
    this.showRecipe = displayOption.isDisplayRecipe;
    this.showShoppingList = displayOption.isDisplayShoppingList;
  }
  /*********************************************************************/    
}
