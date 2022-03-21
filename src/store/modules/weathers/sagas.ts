import {Alert} from 'react-native';
import {takeLatest, put, all} from 'redux-saga/effects';

import {updateWeathersSuccess, updateWeathersFailure} from './actions';

export function* updateWeathers({payload}) {
  try {
    const {data} = payload;

    yield put(updateWeathersSuccess(data));
  } catch (err) {
    Alert.alert(
      'Falha na atualização',
      'Houve um erro na atualização do estado da requisiçao',
    );
    yield put(updateWeathersFailure());
  }
}

export default all([
  takeLatest('@weathers/UPDATE_WEATHERS_REQUEST', updateWeathers),
]);
