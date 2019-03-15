import {toastr} from 'react-redux-toastr';
import { DELETE_RECIPE, UPDATE_RECIPE, FETCH_RECIPES } from './recipeConstants';
import { asyncActionStart, asyncActionFinish, asyncActionError } from '../../../features/async/asyncActions';
import { fetchSampleData } from '../../../features/data/mockApi';
import { createNewRecipe } from '../helpers';
import firebase from '../../config/firebase';
import cuid from 'cuid';
import { uploadImage } from '../../../features/components/fields/FileInput';

export const fetchRecipes = (recipes) => {
  return {
    type: FETCH_RECIPES,
    payload: recipes
  }
};

export const createRecipe = (recipe) => {
  return async (dispatch, getState, { getFirestore, getFirebase }) => {
    const firestore = getFirestore();
    const user = firebase.auth().currentUser;
    const photoURL = getState().firebase.profile.photoURL; 
    let imageName = cuid();
    let newRecipe = createNewRecipe(user, photoURL, recipe, imageName);
    try {
      let createdRecipe = await firestore.add(`recipes`, newRecipe);
      firestore.set(`recipe_author/${createdRecipe.id}_${user.uid}`, {
        recipeId: createdRecipe.id,
        userUid: user.uid,
        authentication: true
      });
    
    const uploadedFile = `recipe_image/${createdRecipe.id}_${imageName}`
    firestore.set(uploadedFile,{
      recipeId: createdRecipe.id,
      id: imageName,
    }) 
    
      toastr.success('Success', 'Recipe has been created');
    } catch (error) {
      toastr.error('Oops', 'Something went wrong');
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
};
