import { SubmissionError } from 'redux-form'
import { closeModal } from '../../app/actions/modalActions/modalsActions';

export const login = creds => {
  return async (dispatch, getState, { getFirebase })=> {
    const firebase = getFirebase();
    try {
      await firebase.auth().signInWithEmailAndPassword(creds.email, creds.password);
      dispatch(closeModal())
    } catch (error) {
      console.log(error);
      throw new SubmissionError({
        _error: 'Login failed'
      });
    }
  }
};

export const registerUser = user => 
  async (dispatch, getState, {getFirebase, getFirestore}) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    try {
      let createdUser = await firebase.auth().createUserWithEmailAndPassword(user.email, user.password);
      console.log(createdUser);
      await createdUser.updateProfile({
        displayName: user.displayName
      });
      let newUser = {
        displayName: user.displayName,
        createdAt: firestore.FieldValue.serverTimestamp()
      };
      await firestore.set(`users/${createdUser.uid}`, {...newUser})
      dispatch(closeModal());
    } catch (error) {
      console.log(error)
      throw new SubmissionError({
        _error: error.message
      });
    }
  };

  export const socialLogin = selectedProvider =>
  async (dispatch, getState, {getFirebase, getFirestore}) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    try {
      dispatch(closeModal());
      let user = await firebase.login({
        provider: selectedProvider,
        type: 'popup'
      })
      if (user.additionalUserInfo.isNewUser) {
        await firestore.set(`users/${user.user.uid}`, {
          displayName: user.profile.displayName,
          photoURL: user.profile.photoURL,
          createdAt: firestore.FieldValue.serverTimestamp()
        })
      }
    } catch (error) {
      console.log(error)
    }
  };
