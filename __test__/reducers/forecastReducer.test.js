import { Map, List, fromJS } from 'immutable';

import constant from '../../src/constants/forecastConstants';
import reducer from '../../src/reducers/forecastReducer';

const initialState = Map({
  forecast: Map({
    city: Map({
      name: '',
    }),
    list: List([]),
  }),
  status: '',
});

describe('forecast reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {}))
      .toEqual(initialState);
  });

  it('should start getting forecast', () => {
    const expectedAction = {
      type: constant.START_GETTING_FORECAST,
    };
    expect(reducer(initialState, expectedAction))
      .toEqual(
        initialState
          .set('status', 'loading'),
      );
  });

  it('should handle getting forecast with success', () => {
    const expectedAction = {
      type: constant.SUCCESS_GETTING_FORECAST,
      result: {
        status: 200,
        data: {
          city: {
            name: 'some city',
            country: 'some country',
          },
          list: [
            {
              clouds: {
                dt: 123,
              },
              main: {
                temp: 123,
              },
              weather: [{
                description: 'some desc',
                id: 123,
                icon: '123',
              }],
              wind: {
                speed: 123,
              },
            },
          ],
        },
      },
    };
    expect(reducer(initialState, expectedAction))
      .toEqual(
        initialState
          .set('status', 'success')
          .set('forecast', fromJS(expectedAction.result.data)),
      );
  });

  it('should handle getting forecast with fail', () => {
    const expectedAction = {
      type: constant.FAIL_GETTING_FORECAST,
    };
    expect(reducer(initialState, expectedAction))
      .toEqual(
        initialState
          .set('status', 'fail'),
      );
  });
});
