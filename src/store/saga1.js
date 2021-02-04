import { all, takeEvery, delay, put, call } from 'redux-saga/effects';
import * as actionTypes from './actionTypes';

// saga分为3种
// 1. rootSaga, 入口saga, 用来组织和调用别的saga generator
// 2. 监听saga, 监听向仓库派发动作的, 监听到某些动作会通知worker执行
// 3. work saga. 真正执行任务的saga

export function* helloSaga() {
  console.log('hello saga');
}

export function* watchIncrementAsync() {
  console.log('watchIncrementAsync');
  // 监听每一次的ASYNC_INCREMENT的动作, 每次向仓库派发这个动作的时候, 就会调用另外一个worker saga执行任务
  // 被称为effect, 告诉saga中间件进行某些处理
  yield takeEvery(actionTypes.ASYNC_INCREMENT, incrementAsync);
}

export function* incrementAsync() {
  console.log('incrementAsync', incrementAsync);
  // yield delay(1000)
  yield delay(1000);
  yield put({ type: actionTypes.INCREMENT });
}

export default function* rootSaga() {
  // 这里的all本质上是一个action, {type: 'ALL', payload: [helloSaga, watchIncrementAsync]}
  yield all([helloSaga(), watchIncrementAsync()]);
}
