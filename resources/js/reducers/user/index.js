import { handleActions } from 'redux-actions';

import {
  saveUserDataToStore as saveUserDataToStoreAction,
} from '../../actions/user';

import saveUserDataToStore from './saveUserDataToStore';

export default handleActions(
  {
    [saveUserDataToStoreAction]: saveUserDataToStore,
  },
  null,
);
