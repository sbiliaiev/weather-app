import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// import 'react-mdc-web/out/react-mdc-web';
import 'material-components-web/dist/material-components-web.min.css';
// import 'weather-icons/css/weather-icons.min.css';
import './assets/css/weather-icons.css';
import './assets/css/weather-icons-wind.min.css';

import store from './store';

import App from './components/app';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
