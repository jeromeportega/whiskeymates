import { createAction } from 'redux-actions';

export const submitRegistrationForm = createAction('user/SUBMIT_REGISTRATION_FORM');
export const submitLoginForm = createAction('user/SUBMIT_LOGIN_FORM');
export const saveUserDataToStore = createAction('user/SAVE_DATA_TO_STORE');
