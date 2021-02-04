import { call, put, race, take } from 'redux-saga/effects';
import * as actionTypes from './../actionTypes';
function delay(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(ms);
    }, ms);
  });
}

function* start() {
  while (true) {
    yield call(delay, 1000);
    yield put({ type: actionTypes.INCREMENT });
  }
}

export default function* () {
  yield race({
    start: call(start),
    stop: take(actionTypes.CANCEL_COUNTER),
  });
}
