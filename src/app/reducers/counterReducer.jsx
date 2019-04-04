import { INCREMENT_COUNTER } from '../actions/counterActions/counterConstants';

const initialState = {
  data: 0
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {...state, data: state.data + 1};
    default:
      return state;
  }
}