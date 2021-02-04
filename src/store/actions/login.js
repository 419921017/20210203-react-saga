import * as actionTypes from './../actionTypes';

export default {
  login(username, password) {
    return { type: actionTypes.LOGIN, payload: { username, password } };
  },
  logout() {
    return { type: actionTypes.LOGOUT };
  },
};
