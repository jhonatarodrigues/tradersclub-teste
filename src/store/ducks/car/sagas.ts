import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';
import { loadSuccess, loadError } from './actions';

export function* load() {
  try {
    // -- chamada de api
    const response = yield call(api.get, '');

    // yield put(loadSuccess(response.data));
  } catch (err) {
    yield put(loadError());
  }
}
