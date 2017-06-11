import action from '../../src/actions/locationActions';
import constant from '../../src/constants/locationConstants';
import api from '../../src/api';

describe('location actions', () => {
  it('should create and action of getting current location', () => {
    const expectedAction = {
      types: [
        constant.START_GETTING_LOCATION,
        constant.SUCCESS_GETTING_LOCATION,
        constant.FAIL_GETTING_LOCATION,
      ],
      promise: api.location.getCurrentLocation(),
    };
    expect(action.getCurrentLocation()).toEqual(expectedAction);
  });
});
