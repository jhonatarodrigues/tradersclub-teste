import { all, takeLatest } from 'redux-saga/effects';

import { CarTypes } from './car/types';
import { load } from './car/sagas';

export default function* rootSaga() {
  return yield all([
    takeLatest(CarTypes.LOAD_REQUEST, load),
  ]);
}
