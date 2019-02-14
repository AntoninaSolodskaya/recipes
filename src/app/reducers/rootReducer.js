import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';
import recipeReducer from './recipeReducer';
import modalReducer from './modalReducer';

const rootReducer = combineReducers({
  form: FormReducer,
  recipes: recipeReducer,
  modals: modalReducer
})

export default rootReducer;
