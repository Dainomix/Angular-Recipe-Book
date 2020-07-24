import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    // @Output() showLayoutEvent = new EventEmitter<{isDisplayRecipe:boolean, isDisplayShoppingList: boolean}>();
    @Output() featureSelected = new EventEmitter<string>();

    collapsed: boolean = true;

    constructor() {
    }

    ngOnInit(): void {
    }

    /* Solution Version*/
    onSelect(feature: string) {
        this.featureSelected.emit(feature);
    }
    /*******************/
    
    /* 
    // Challenge: Adding Navigation function with Event Binding and ngIf
    onShowRecipeBook(): void{
        this.showLayoutEvent.emit({
            isDisplayRecipe: true,
            isDisplayShoppingList: true,
        });
    }

    onShowRecipe(): void {
        this.showLayoutEvent.emit({
            isDisplayRecipe: true,
            isDisplayShoppingList: false,
        });
    }

    onShowShoppingList(): void {
        this.showLayoutEvent.emit({
            isDisplayRecipe: false,
            isDisplayShoppingList: true,
        });
    }
    */




}