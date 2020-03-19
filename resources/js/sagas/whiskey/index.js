import { all, takeEvery } from 'redux-saga/effects';

import {
  submitAddWhiskeyForm,
} from '../../actions/whiskey';

import submitAddWhiskeyFormSaga from './submitAddWhiskeyForm';

export default function* UserSaga() {
  yield all([
    takeEvery(String(submitAddWhiskeyForm), submitAddWhiskeyFormSaga),
  ]);
}
