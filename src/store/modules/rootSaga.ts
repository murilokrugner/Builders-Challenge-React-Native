import {all} from 'redux-saga/effects';

import weathers from './weathers/sagas';
import cities from './cities/sagas';

export default function* rootSaga() {
  return yield all([weathers, cities]);
}
