import { Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as RecipeActions from './recipe.actions'
import { Recipe } from '../recipe.model';
import { Injectable } from '@angular/core';
import * as fromApp from '../../store/app.reducer'


@Injectable()
export class RecipeEffects{

  @Effect()
  fetchRecipes = this.actions$.pipe(ofType(RecipeActions.FETCH_RECIPES),
  switchMap(()=>{
    return this.http.get<Recipe[]>('https://recipe-a4fcc.firebaseio.com/recipes.json')
  }), map(recipes => {
    return recipes.map(recipe => {
      return {...recipe, ingredients: recipe.ingredients? recipe.ingredients : []} //like for process
    });
  }), map(recipes => {
    return new RecipeActions.SetRecipes(recipes);
  })
  )



  @Effect({dispatch:false})
  storeRecipes = this.actions$.pipe(ofType(RecipeActions.STORE_RECIPES),
  withLatestFrom(this.store.select('recipes')),   //merge valus into observables
  switchMap(([actionData, recipeState]) => {
    return this.http
      .put(
        'https://recipe-a4fcc.firebaseio.com/recipes.json',
        recipeState.recipes
      )
  })
  )


  constructor(private actions$ : Actions, private http : HttpClient, private store : Store<fromApp.AppState>){}
}
