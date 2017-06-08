import { createStore, applyMiddleware, compose } from 'redux';

import reducer from './reducers';
import requestMiddleware from './middleware/requestMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(
  applyMiddleware(
    requestMiddleware,
  ),
));

export default store;