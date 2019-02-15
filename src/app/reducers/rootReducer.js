import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';
import recipeReducer from './recipeReducer';
import modalReducer from './modalReducer';
import authReducer from '../../features/auth/authReducer';
import asyncReducer from '../../features/async/asyncReducer';

const rootReducer = combineReducers({
  form: FormReducer,
  recipes: recipeReducer,
  modals: modalReducer,
  auth: authReducer,
  async: asyncReducer
})

export default rootReducer;
