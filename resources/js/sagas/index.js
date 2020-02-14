import { all } from 'redux-saga/effects';

import userSaga from './user';

export default function* saga() {
  yield all([
    userSaga(),
  ]);
}
