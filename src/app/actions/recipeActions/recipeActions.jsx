import {toastr} from 'react-redux-toastr';
import { CREATE_RECIPE, DELETE_RECIPE, UPDATE_RECIPE, FETCH_RECIPES } from './recipeConstants';
import { asyncActionStart, asyncActionFinish, asyncActionError } from '../../../features/async/asyncActions';
import { fetchSampleData } from '../../../features/data/mockApi';

export const fetchRecipes = (recipes) => {
  return {
    type: FETCH_RECIPES,
    payload: recipes
  }
}

export const createRecipe = recipe => {
  return async dispatch => {
    try {
      dispatch({
        type: CREATE_RECIPE,
        payload: {
          recipe
        }
      });
      toastr.success('Success', 'Recipe has been created')
    } catch (error) {
      toastr.error('Oops', 'Something went wrong')
    }
  };
};

export const updateRecipe = recipe => {
  return async dispatch => {
    try {
      dispatch({
        type: UPDATE_RECIPE,
        payload: {
          recipe
        }
      });
      toastr.success('Success', 'Recipe has been updated')
    } catch (error) {
      toastr.error('Oops', 'Something went wrong')
    }
  };
};

export const deleteRecipe = recipeId => {
  return {
    type: DELETE_RECIPE,
    payload: {
      recipeId
    }
  }
};

export const loadRecipes = () => {
  return async dispatch => {
    try {
      dispatch(asyncActionStart())
      let recipes = await fetchSampleData();
      dispatch(fetchRecipes(recipes))
      dispatch(asyncActionFinish());
    } catch (error) {
      console.log(error);
      dispatch(asyncActionError());
    }
  }
}
