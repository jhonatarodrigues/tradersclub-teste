import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';
import { loadError } from './actions';

export function* load() {
  try {
    // -- chamada de api
    const response = yield call(api.get, '');
    // eslint-disable-next-line no-console
    console.log(response); // -- retorno que viria daa api e envia pro reducer.

    // yield put(loadSuccess(response.data));
  } catch (err) {
    yield put(loadError());
  }
}
