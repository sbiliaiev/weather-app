import { combineReducers } from 'redux';

import forecast from './forecastReducer';
import location from './locationReducer';

export default combineReducers({
  forecast,
  location,
});
