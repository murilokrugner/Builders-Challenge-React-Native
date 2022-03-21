import {Alert} from 'react-native';
import {takeLatest, put, all} from 'redux-saga/effects';

import {updateCitiesSuccess, updateCitiesFailure} from './actions';

export function* updateCities({data}) {
  try {
    yield put(updateCitiesSuccess(data));
  } catch (err) {
    Alert.alert('Falha na atualização', 'Houve um erro na atualização');
    yield put(updateCitiesFailure());
  }
}

export default all([takeLatest('@cities/UPDATE_CITIES_REQUEST', updateCities)]);
