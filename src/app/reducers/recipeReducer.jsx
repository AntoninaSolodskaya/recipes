import { createReducer } from '../common/util/reducerUtil';
import { CREATE_RECIPE, DELETE_RECIPE, UPDATE_RECIPE, FETCH_RECIPES } from '../actions/recipeActions/recipeConstants';

const initialState = [];

export const createRecipe = (state, payload) => {
  return [
    ...state, Object.assign({}, payload.recipe)
  ]
};

export const updateRecipe = (state, payload) => {
  return [
    ...state.filter(recipe => recipe.id !== payload.recipe.id),
    Object.assign({}, payload.recipe)
  ]
};

export const deleteRecipe = (state, payload) => {
  return [
    ...state.filter(recipe => recipe.id !== payload.recipeId)
  ]
};

export const fetchRecipes = (state, payload) => {
  return payload.recipes
};

export default createReducer(initialState, {
  [CREATE_RECIPE]: createRecipe,
  [UPDATE_RECIPE]: updateRecipe,
  [DELETE_RECIPE]: deleteRecipe,
  [FETCH_RECIPES]: fetchRecipes
});

