import * as actionTypes from './../actionTypes';

let initState = {
  username: '',
  token: '',
  error: '',
};

function reducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.LOGIN:
      return { ...state, ...action.payload };
    case actionTypes.LOGIN_SUCCESS:
      return { ...state, ...action.payload };
    case actionTypes.LOGIN_ERROR:
      return { error: action.error };
    case actionTypes.LOGOUT:
      return { ...state, ...action.payload };
    case actionTypes.LOGOUT_SUCCESS:
      return {
        username: '',
        token: '',
        error: '',
      };
    default:
      return state;
  }
}

export default reducer;
