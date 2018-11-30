import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './state/store';
import * as serviceWorker from './serviceWorker';

import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import App from './App'

const store = configureStore({});

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);

Provider.propTypes = {
  store: PropTypes.object.isRequired
}


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
