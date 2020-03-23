import { put, call } from 'redux-saga/effects';
import axios from 'axios';

export default function* submitAddWhiskeyForm({ payload }) {
  try {
    const response = yield call(axios.post, `${process.env.MIX_API_URL}/whiskey`, {
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
        yield put(saveWhiskeyToStore(response.data.whiskey));
      }

      payload.setIsSubmitting(false);
      payload.closeModal();
    }
  } catch (e) {
    payload.setIsSubmitting(false);
    console.log(e);
  }
}
