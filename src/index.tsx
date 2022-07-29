import React from "react";
import ReactDOM from "react-dom";
import { configureStore , applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'react-thunk';

const store = configureStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App color="red" />
  </Provider>, 
  document.querySelector('#root')
);