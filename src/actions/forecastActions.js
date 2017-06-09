import api from '../api';

import constant from '../constants/forecastConstants';

const getForecast = param => ({
  types: [
    constant.START_GETTING_FORECAST,
    constant.SUCCESS_GETTING_FORECAST,
    constant.FAIL_GETTING_FORECAST,
  ],
  promise: api.owm.getForecast(param),
});

export default {
  getForecast,
};
