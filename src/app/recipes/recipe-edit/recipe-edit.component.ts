import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id:number;
  editMode = false;

  constructor(private route: ActivatedRoute) { }

  /**
   * We don't need to clean up the subscription here.
   * 
   * In other cases where we use our own observables, 
   * observabls we created and not managed by Angular
   * 
   * Therefore, we will need to clean up the subscription.
   * 
   * So definitely keep that in mind if we work with our own observables, here for now.
   * We can simply proceed with the set up and let Angular do the celanup work.
   */

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          console.log(this.editMode);
        }
      )
  }

}
