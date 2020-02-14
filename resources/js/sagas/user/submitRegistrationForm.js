import { put, call } from 'redux-saga/effects';

import { saveUserDataToStore } from '../../actions/user';

export default function* submitRegistrationFormSaga({ payload }) {
  console.log(payload);

  // try {
  //   call(axios.post, `${process.env.MIX_API_URL}/user/create`, {
  //     ...payload,
  //   }, {
  //     headers: {
  //       Accept: 'application/json',
  //     },
  //   });

  //   if (response.status === 200) {
  //     if (response.data.user === null) {
  //       // Do nothing, user default state is null
  //     } else {
  //       yield put(saveUserDataToStore(response.data.user));
  //     }
  //   }
  // } catch (e) {
  //   console.log(e);
  // }
}
