import { Map, List, fromJS } from 'immutable';

import constant from '../../src/constants/locationConstants';
import reducer from '../../src/reducers/locationReducer';

const initialState = Map({
  latitude: 0,
  longitude: 0,
  status: '',
});

describe('location reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {}))
      .toEqual(initialState);
  });

  it('should start getting current location', () => {
    const expectedAction = {
      type: constant.START_GETTING_LOCATION,
    };
    expect(reducer(initialState, expectedAction))
      .toEqual(
        initialState
          .set('status', 'loading'),
      );
  });

  it('should handle getting current location with success', () => {
    const expectedAction = {
      type: constant.SUCCESS_GETTING_LOCATION,
      result: {
        latitude: 123,
        longitude: 123,
      },
    };
    expect(reducer(initialState, expectedAction))
      .toEqual(
        initialState
          .set('status', 'success')
          .set('latitude', expectedAction.result.latitude)
          .set('longitude', expectedAction.result.longitude),
      );
  });

  it('should handle getting current location with fail', () => {
    const expectedAction = {
      type: constant.FAIL_GETTING_LOCATION,
    };
    expect(reducer(initialState, expectedAction))
      .toEqual(
        initialState
          .set('status', 'fail'),
      );
  });
});
