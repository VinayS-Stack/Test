import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { RootReducer } from "../Reducers";
import rootSaga from "../Saga";

const sagaMiddleware = createSagaMiddleware();

const store = compose(
  applyMiddleware(sagaMiddleware),
  (window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_()) ||
    compose
)(createStore)(RootReducer);

sagaMiddleware.run(rootSaga);

export default store;
