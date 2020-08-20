import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { RecipesComponent } from "./recipes/recipes.component";
import { RecipeStartComponent } from "./recipes/recipe-start/recipe-start.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";

/**
 * If Order:
 * { path: ':id', component: RecipeDetailComponent },
 * { path: 'new', component: RecipeEditComponent},
 * 
 * If we try to go to /recipes/new. Now we try to load the detail component and therefore, we get an error
 * because it basically failed to get a recipe with the ID new and that's exactly what went wrong
 * If we visit recipes /new, due to the way how we ordered our routes, it will try to parse new as an ID
 * because the route with the dynamic ID parameter comes before the route definition where we have new hardcoded into the path
 * 
 * As a result, we should switch these two routes, so that the new route comes before the routew with the dynamic parameter,
 * otherwise how would Angular know if whatever we pass right now should be interpreted as the new hardcoded path or as a dynamic parameter
 */
const appRoutes: Routes = [
    {path: '', redirectTo: '/recipes', pathMatch:'full'},
    {path: 'recipes', component: RecipesComponent, children: [
        { path: '', component: RecipeStartComponent },
        { path: 'new', component: RecipeEditComponent},
        { path: ':id', component: RecipeDetailComponent },
        { path: ':id/edit', component: RecipeEditComponent }
    ] },
    {path: 'shopping-list', component: ShoppingListComponent}
];

@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes),
    ],
    exports: [
        RouterModule,
    ]
})
export class AppRoutingModule {}