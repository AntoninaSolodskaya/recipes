import {toastr} from 'react-redux-toastr';
import { FETCH_RECIPES } from './recipeConstants';
import { asyncActionStart, asyncActionFinish, asyncActionError } from '../../../features/async/asyncActions';
import { createNewRecipe } from '../helpers';
import firebase from '../../config/firebase';


export const createRecipe = recipe => {
  return async (dispatch, getState, { getFirestore, getFirebase }) => {
    const firestore = getFirestore();
    const user = firebase.auth().currentUser;
    const photoURL = getState().firebase.profile.photoURL; 
    let newRecipe = createNewRecipe(user, photoURL, recipe);
    try {
      let createdRecipe = await firestore.add(`recipes`, newRecipe);
      firestore.set(`recipe_author/${createdRecipe.id}_${user.uid}`, {
        recipeId: createdRecipe.id,
        userUid: user.uid,
        authentication: true
      });
      toastr.success('Success', 'Recipe has been created');
    } catch (error) {
      toastr.error('Oops', 'Something went wrong');
    }
  };
};

export const updateRecipe = recipe => {
  return async (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    try {
      await firestore.update(`recipes/${recipe.id}`, recipe)
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteRecipe = recipeId => {
  return async (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    try {
      await firestore.delete(`recipes/${recipeId}`)
    } catch (error) {
      console.log(error);
    }
  };
};

// export const loadRecipes = () => {
//   return async dispatch => {
//     try {
//       dispatch(asyncActionStart())
//       let recipes = await fetchSampleData();
//       dispatch(fetchRecipes(recipes))
//       dispatch(asyncActionFinish());
//     } catch (error) {
//       console.log(error);
//       dispatch(asyncActionError());
//     }
//   }
// };

export const getRecipe = lastRecipe => async (dispatch, getState) => {
    let today = new Date(Date.now());
    console.log(today)
    const firestore = firebase.firestore();
    const recipesRef = firestore.collection('recipes');
   
    try {
      dispatch(asyncActionStart());
      let startAfter = 
        lastRecipe && 
        (await firestore
          .collection('recipes')
          .doc(lastRecipe.id)
          .get());
      let query;

      lastRecipe
        ? (query = recipesRef
          .where('createdAt', '<', today)
          .orderBy('createdAt')
          .startAfter(startAfter)
          .limit(8))
        : (query = recipesRef
          .where('createdAt', '<', today)
          .orderBy('createdAt')
          .limit(8))
        
      let querySnap = await query.get();

      if (querySnap.docs.length === 0) {
        dispatch(asyncActionFinish());
        return querySnap;
      }

      let recipes = [];

      for (let i = 0; i < querySnap.docs.length; i++) {
        let evt = {...querySnap.docs[i].data(), id: querySnap.docs[i].id};
        recipes.push(evt);
      }
      dispatch({ type: FETCH_RECIPES, payload: {recipes} })
      dispatch(asyncActionFinish());
      return querySnap;
    } catch (error) {
      console.log(error);
      dispatch(asyncActionError());
    }
  };