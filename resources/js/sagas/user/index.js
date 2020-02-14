import { all, takeEvery } from 'redux-saga/effects';

import {
  submitRegistrationForm
} from '../../actions/user';

import submitRegistrationFormSaga from './submitRegistrationForm';

export default function* UserSaga() {
  yield all([
    takeEvery(String(submitRegistrationForm), submitRegistrationFormSaga),
  ]);
}
