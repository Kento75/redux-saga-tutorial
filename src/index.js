import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import axios from "axios";
import reducers from "./reducers";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import "bootstrap/dist/css/bootstrap.min.css";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://rem-rest-api.herokuapp.com/api";

// Sagaの設定
const sagaMiddleware = createSagaMiddleware();
// RootReducerとSagaミドルウェアの設定
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
// RootSagaを設定
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    < App />
  </Provider>,
document.getElementById('root'));

serviceWorker.unregister();
