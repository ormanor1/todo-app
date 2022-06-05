import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from './store/reducers/rootReducer';

// const root = ReactDOM.createRoot(
//   document.getElementById('root'),
// );

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger),
);

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
  // </React.StrictMode>,
);

reportWebVitals();
