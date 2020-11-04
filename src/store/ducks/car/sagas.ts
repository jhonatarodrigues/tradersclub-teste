import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';
import { loadSuccess, loadError } from './actions';

export function* load() {
  try {
    const response = yield call(api.get, 'carlist/');

    yield put(loadSuccess(response.data));
  } catch (err) {
    yield put(loadError());
  }
}
