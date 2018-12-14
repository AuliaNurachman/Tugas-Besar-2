import { Injectable} from '@angular/core';
import { Recipe } from '../recipe/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingEditComponent } from '../shopping-list/shopping-edit/shopping-edit.component';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';


@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  //property:class recipe
  private recipes:Recipe[]=[
    new Recipe('Deep Cleaning',
    'Deep Cleaning adalah metode membersihkan sepatu secara menyeluruh yang meliputi OutSole (Bawah), MidSole (Samping), Upper (Atas), Insole (Dalam), Lace (Tali)'
    ,'https://dapperclean.com/wp-content/uploads/2018/05/Image_29ffbb8-800x600.jpg',[
      new Ingredient('meal',1),
      new Ingredient('tomato',2)
    ]),
    new Recipe('Fast Cleaning',
    'Fast Cleaning adalah cara membersihkan sepatu secara cepat, yang hanya meliputi upper dan midsole dan tidak membutuhkan waktu yang lama.'
    ,'http://shoescornerid.com/img/treatment/fast-clean3.jpg',[
      new Ingredient('rice',1),
      new Ingredient('meal',3),
      new Ingredient('egg',1)
    ]),
  ];

  getRecipes(){
    return this.recipes.slice();
  }
  addIngredientsShoppingList(ingredients:Ingredient[]){
    this.slsService.addIngredients(ingredients);
  }

  getRecipe(index:number){
    return this.recipes[index];
  }

  addRecipe(recipe :Recipe){
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }
  updateRecipe(index :number, newRecipe: Recipe){
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number){
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

constructor(private slsService:ShoppingListService) { }

  setRecipes(recipes:Recipe[]){
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }
}
