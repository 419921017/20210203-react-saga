import {
  DECREMENT,
  INCREMENT,
  ASYNC_INCREMENT,
  CANCEL_COUNTER,
} from '../actionTypes';

export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const asyncIncrement = () => ({ type: ASYNC_INCREMENT });
export const stop = () => ({ type: CANCEL_COUNTER });

export default {
  increment,
  decrement,
  asyncIncrement,
  stop,
};
