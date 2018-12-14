import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';
// import { Ingredient } from './ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients:Ingredient[]
  private subscription: Subscription;
  //=[
   // new Ingredient('Apples',23),
    //new Ingredient('tomato',10),
  //];
  constructor(private slsService:ShoppingListService) { }

  ngOnInit() {
    this.ingredients=this.slsService.getIngredients();
    this.subscription=this.slsService.ingredientChanged
    .subscribe(
      (Ingredient:Ingredient[])=>{
        this.ingredients=Ingredient;
      }
    )
  }
  onEditItem(index: number){
    this.slsService.startedEditing.next(index);
  }
  
 ngOnDestroy() {
this.subscription.unsubscribe();
   
 }
  //onIngredientAdded(ingredient:Ingredient)
  //{
    //this.ingredients.push(ingredient);
  //}
}
