
import { Recipe } from './../recipe.model';

import { Action } from '@ngrx/store';



export const SET_RECIPES = '[Recipe] SET RECIPES';
export const FETCH_RECIPES = '[Recipe] FETCH RECIPES';
export const ADD_RECIPE = '[Recipe] ADD RECIPE';
export const UPDATE_RECIPE = '[Recipe] UPDATE RECIPE';
export const DELETE_RECIPE = '[Recipe] DELETE RECIPE';
export const STORE_RECIPES = '[Recipe] STORE RECIPES'


export class SetRecipes implements Action{
  readonly type = SET_RECIPES;

  constructor(public payload:Recipe[]){}
}

export class FetchRecipes implements Action{
  readonly type = FETCH_RECIPES;

}

export class AddRecipe implements Action{
  readonly type = ADD_RECIPE;

  constructor(public payload:Recipe){}
}


export class UpdateRecipe implements Action{
  readonly type = UPDATE_RECIPE;

  constructor(public payload:{
    index : number,
    newRecipe : Recipe
  }){}
}

export class DeleteRecipe implements Action {
  readonly type = DELETE_RECIPE;

  constructor(public payload:number){}
}

export class storeRecipes implements Action{
  readonly type = STORE_RECIPES;

}


export type RecipeActions = SetRecipes| AddRecipe | UpdateRecipe | DeleteRecipe | storeRecipes;
