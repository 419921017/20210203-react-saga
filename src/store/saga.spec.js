import { call, delay, put } from 'redux-saga/effects';
import test from 'tape';
import { incrementAsync } from './saga/saga';
import * as actionTypes from './actionTypes'

test('incrementAsync saga test', function (assert) {
  let gen = incrementAsync();
  // 对比的不是引用地址, 而是值本身
  // assert.deepEqual(
  //   gen.next().value,
  //   call(delay, 1000),
  //   '第一次执行应该会返回一个延迟1s的promise'
  // );

  assert.deepEqual(gen.next().value, put({type: actionTypes.ASYNC_INCREMENT}), '返回异步increment')
});
