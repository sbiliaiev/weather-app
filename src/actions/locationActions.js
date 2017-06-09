import api from '../api';

import constant from '../constants/locationConstants';

const getCurrentLocation = () => ({
  types: [
    constant.START_GETTING_LOCATION,
    constant.SUCCESS_GETTING_LOCATION,
    constant.FAIL_GETTING_LOCATION,
  ],
  promise: api.location.getCurrentLocation(),
});

export default {
  getCurrentLocation,
};
