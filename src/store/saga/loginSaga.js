import { all, call, fork, put, take, cancel, cancelled } from 'redux-saga/effects';

import API from './../../api';
import * as actionTypes from './../actionTypes';

export function* login(username, password) {
  try {
    let token = yield call(API.login, username, password);

    yield put({
      type: actionTypes.LOGIN_SUCCESS,
      payload: {
        token,
      },
    });
    // return token;
  } catch (error) {
    alert(error);
    yield put({ type: actionTypes.LOGIN_ERROR });
  } finally {
    if (yield cancelled()) {
      // 最终的
    }
  }
}

export function* logout(params) {}

export default function* loginSaga() {
  while (true) {
    // 等待登陆操作
    let {
      payload: { username, password },
    } = yield take(actionTypes.LOGIN);
    // 使用frok开启子进程处理任务, 返回任务对象
    const loginTask = yield fork(login, username, password);

    // 调用登陆接口
    // const token = yield call(login, username, password);
    // 判断登陆状态
    // if (token) {
    //   // 触发登陆成功操作
    // yield put({
    //   type: actionTypes.LOGIN_SUCCESS,
    //   payload: {
    //     token,
    //   },
    // });
    // 一旦登陆成功了. 就需要监听退出的动作
    const logoutAction = yield take(actionTypes.LOGOUT);

    if (logoutAction.type === actionTypes.LOGOUT) {
      yield cancel(loginTask);
    }
    // 触发退出成功
    yield put({
      type: actionTypes.LOGOUT_SUCCESS,
    });

    // }
  }
}
