import * as actionTypes from './../actionTypes';
let initState = { number: 0 };

function reducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return {
        ...state,
        number: state.number + 1,
      };

    case actionTypes.DECREMENT:
      return {
        ...state,
        number: state.number - 1,
      };
    // case actionTypes.ASYNC_INCREMENT:
    //   return {
    //     ...state,
    //     number: state.number + 1,
    //   };
    default:
      return state;
  }
}

export default reducer;
