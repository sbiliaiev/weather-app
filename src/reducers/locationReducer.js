import { Map } from 'immutable';

import constant from '../constants/locationConstants';

const initialState = Map({
  latitude: 0,
  longitude: 0,
  status: '',
});

export default function (state = initialState, action) {
  switch (action.type) {
    case constant.START_GETTING_LOCATION:
      return state
        .set('status', 'loading');
    case constant.SUCCESS_GETTING_LOCATION:
      return state
        .set('status', 'success')
        .set('latitude', action.result.latitude)
        .set('longitude', action.result.longitude);
    case constant.FAIL_GETTING_LOCATION:
      return state
        .set('status', 'fail');
    default:
      return state;
  }
}
