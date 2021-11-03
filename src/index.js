// import '@babel/polyfill';
import React from 'react';
// import './index.scss';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'font-awesome/css/font-awesome.min.css';
//store
import { createStore } from "redux";
import myReducer from "./reducers/root";
import { Provider } from "react-redux";

const store = createStore(myReducer);
// const persisted = getLocalStorage();

ReactDOM.render(
  // <React.StrictMode>
  <Provider  store={store}>
      <App />
  </Provider>,   
  // {/* </React.StrictMode>, */}
  document.getElementById('root')
);

serviceWorker.unregister();