import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import * as actionTypes from './types';

export const emailChanged = (text) => {
    return {
        type: actionTypes.EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {
    return {
        type: actionTypes.PASSWORD_CHANGED,
        payload: text
    };
};

export const loginUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: actionTypes.LOGIN_USER });
        
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user))
            .catch((error) => {
                console.log(error);
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(user => loginUserSuccess(dispatch, user))
                    .catch(() => loginUserFail(dispatch));
            });
    };
};

// private functions
const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: actionTypes.LOGIN_USER_SUCCESS,
        payload: user
    });
    Actions.main();
};

const loginUserFail = (dispatch) => {
    dispatch({ type: actionTypes.LOGIN_USER_FAIL });
};
