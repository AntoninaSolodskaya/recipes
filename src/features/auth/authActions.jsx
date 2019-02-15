import { LOGIN_USER, SIGN_OUT_USER } from './authConstants';
import { closeModal } from '../../app/actions/modalActions/modalsActions';

export const login = (creds) => {
  return dispatch => {
    dispatch({type: LOGIN_USER, payload: {creds}})
    dispatch(closeModal())
  }
} 

export const logout = () => {
  return {
    type: SIGN_OUT_USER
  }
}