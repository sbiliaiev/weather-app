import action from '../../src/actions/forecastActions';
import constant from '../../src/constants/forecastConstants';
import api from '../../src/api';

describe('forecast actions', () => {
  it('should create and action of getting forecast from string', () => {
    const param = 'kharkiv';
    const expectedAction = {
      types: [
        constant.START_GETTING_FORECAST,
        constant.SUCCESS_GETTING_FORECAST,
        constant.FAIL_GETTING_FORECAST,
      ],
      promise: api.owm.getForecast(param),
    };
    expect(action.getForecast(param)).toEqual(expectedAction);
  });

  it('should create and action of getting forecast from lat/lon object', () => {
    const param = {
      latitude: 12345678,
      longitude: 12345678,
    };
    const expectedAction = {
      types: [
        constant.START_GETTING_FORECAST,
        constant.SUCCESS_GETTING_FORECAST,
        constant.FAIL_GETTING_FORECAST,
      ],
      promise: api.owm.getForecast(param),
    };
    expect(action.getForecast(param)).toEqual(expectedAction);
  });
});
