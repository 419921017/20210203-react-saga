import { createStore, applyMiddleware } from 'redux';
import createReduxSaga from 'redux-saga';
import reducer from './reducers';
import rootSaga from './saga/saga';

let sagaMiddleware = createReduxSaga()

let store = createStore(reducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

export default store