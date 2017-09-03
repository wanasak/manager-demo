import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILED,
    LOGIN_USER
} from './types';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export const emailChangeAction = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChangeAction = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

export const loginUserAction = ({
    email,
    password
}) => {
    return (dispatch) => {
        dispatch({
            type: LOGIN_USER
        });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => loginUserSuccessAction(dispatch, user))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(user => loginUserSuccessAction(dispatch, user))
                    .catch(() => loginUserFailedAction(dispatch));
            });
    }
};

const loginUserSuccessAction = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });

    Actions.employeeList();
};

const loginUserFailedAction = (dispatch) => {
    dispatch({
        type: LOGIN_USER_FAILED
    });
}