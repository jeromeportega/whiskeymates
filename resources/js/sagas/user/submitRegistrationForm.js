import { put, call } from 'redux-saga/effects';
import axios from 'axios';

import { saveUserDataToStore } from '../../actions/user';

export default function* submitRegistrationFormSaga({ payload }) {
  try {
    const response = yield call(axios.post, `${process.env.MIX_API_URL}/user/create`, {
      ...payload.values,
    }, {
      headers: {
        Accept: 'application/json',
      },
    });

    if (response.status === 200) {
      if (response.data.user === null) {
        // Do nothing, user default state is null
      } else {
        yield put(saveUserDataToStore(response.data.user));
      }

      payload.setIsSubmitting(false);
      payload.closeModal();
    }
  } catch (e) {
    console.log(e);
  }
}
