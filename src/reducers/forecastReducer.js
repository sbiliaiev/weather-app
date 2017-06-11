import { Map, List, fromJS } from 'immutable';

import constant from '../constants/forecastConstants';

const initialState = Map({
  forecast: Map({
    city: Map({
      name: '',
    }),
    list: List([]),
  }),
  status: '',
});

export default function (state = initialState, action) {
  switch (action.type) {
    case constant.START_GETTING_FORECAST:
      return state
        .set('status', 'loading');
    case constant.SUCCESS_GETTING_FORECAST:
      return state
        .set('status', 'success')
        .set('forecast', fromJS(action.result.data));
    case constant.FAIL_GETTING_FORECAST:
      return state
        .set('status', 'fail');
    default:
      return state;
  }
}
