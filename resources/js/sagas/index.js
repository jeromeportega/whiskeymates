import { all } from 'redux-saga/effects';

import userSaga from './user';
import whiskeySaga from './whiskey';

export default function* saga() {
  yield all([
    userSaga(),
    whiskeySaga(),
  ]);
}
