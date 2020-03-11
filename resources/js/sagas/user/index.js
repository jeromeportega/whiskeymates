import { all, takeEvery } from 'redux-saga/effects';

import {
  submitRegistrationForm,
  submitLoginForm,
} from '../../actions/user';

import submitRegistrationFormSaga from './submitRegistrationForm';
import submitLoginFormSaga from './submitLoginForm';

export default function* UserSaga() {
  yield all([
    takeEvery(String(submitRegistrationForm), submitRegistrationFormSaga),
    takeEvery(String(submitLoginForm), submitLoginFormSaga),
  ]);
}
