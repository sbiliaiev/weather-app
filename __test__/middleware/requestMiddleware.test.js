import configureMockStore from 'redux-mock-store';
import nock from 'nock';
// import jest from 'jest';
// import { mock, fn } from 'jest';

import api from '../../src/api';
import requestMiddleware from '../../src/middleware/requestMiddleware';

const middlewares = [requestMiddleware];
const mockStore = configureMockStore(middlewares);

describe('request middleware', () => {
  it('should not take any affect on simple actions', () => {
    const expectedAction = {
      type: 'SOME_TYPE',
      value: 'some value',
      anotherObj: {
        foo: 'foo',
        bar: 'bar',
      },
    };
    const store = mockStore({});
    expect(store.dispatch(expectedAction))
      .toEqual(expectedAction);
  });

  // it('should fire start of a promise-based async actions', () => {
  //   const expectedAction = {
  //     types: ['REQUEST', 'SUCCESS', 'FAIL'],
  //     promise: api.owm.getForecast('kharkiv'),
  //   };
  //   const store = mockStore({});
  //   console.log(store.dispatch(expectedAction));
  //   // return store.dispatch(expectedAction)
  //   //   .toEqual({ type: 'REQUEST' });
  // });

  it('should handle success of a promise-based async actions', () => {
    const expectedAction = {
      types: ['REQUEST', 'SUCCESS', 'FAIL'],
      promise: Promise.resolve(),
    };
    const store = mockStore({});
    // jestModule.mock('store.dispatch', () => jestModule.fn());
    const mockedDispatch = () => jest.fn((...args) => store.dispatch(...args));
    mockedDispatch(expectedAction);
    console.log(expectedAction.mock.calls);
    // store.dispatch = jest.fn();
    // // jest.mock('store.dispatch');
    // store.dispatch(expectedAction);
    //   // .then((res) => {
    //   //   console.log(res);
    //   // });
    // console.log(store);
    // console.log(store.dispatch);
    // console.log(store.dispatch.mock.calls);
    // store.dispatch();
    // console.log(store.dispatch.mock.calls);
    // // store.dispatch(expectedAction);
    // // console.log(store.getState());
    // store.dispatch(expectedAction).then((res) => {
    //   expect(res).toHaveProperty('type', 'SUCCESS');
    // });
  });
});

// const createFakeStore = fakeData => ({
//   getState() {
//     return fakeData;
//   },
// });

// const dispatchWithStoreOf = (storeData, action) => {
//   let dispatched = null;
//   const dispatch = requestMiddleware(createFakeStore(storeData))(
//     actionAttempt => (dispatched = actionAttempt),
//   );
//   dispatch(action);
//   return dispatched;
// };

// describe('request middleware', () => {
//   it('should not take any affect on simple actions', () => {
//     const expectedAction = {
//       type: 'SOME_TYPE',
//       value: 'some value',
//       anotherObj: {
//         foo: 'foo',
//         bar: 'bar',
//       },
//     };
//     expect(
//       dispatchWithStoreOf({}, expectedAction))
//         .toEqual(expectedAction);
//   });

//   // it('should not take any affect on function-based actions', () => {
//   //   const expectedAction = () => {
//   //     return {
//   //       type: 'SOME_TYPE',
//   //       value: 'some value',
//   //       anotherObj: {
//   //         foo: 'foo',
//   //         bar: 'bar',
//   //       },
//   //     };
//   //   };
//   //   const expectedActionResult = expectedAction();
//   //   console.log('HERE', dispatchWithStoreOf({}, expectedAction));
//   //   expect(
//   //     dispatchWithStoreOf({}, expectedAction))
//   //       .toEqual(expectedActionResult);
//   // });

//   it('should fire start of a promise-based async actions', () => {
//     const expectedAction = {
//       types: ['REQUEST', 'SUCCESS', 'FAIL'],
//       promise: api.owm.getForecast('kharkiv'),
//     };
//     expect.assertions(1);
//     expect(dispatchWithStoreOf({}, expectedAction))
//       .toEqual({ type: 'REQUEST' });
//   });

//   it('should fire success of a promise-based async actions', () => {
//     const expectedAction = {
//       types: ['REQUEST', 'SUCCESS', 'FAIL'],
//       promise: Promise.resolve(),
//     };
//     // const resolvedAction = api.owm.getForecast('kharkiv').resolve();
//     expect.assertions(1);

//     console.log('HERE', dispatchWithStoreOf({}, expectedAction));


//     // return api.owm.getForecast('kharkiv').then((data) => {
//     //   expect(data).toBe({ type: 'SUCCESS' });
//     // });

//     // expect(dispatchWithStoreOf({}, resolvedAction))
//     //   .toEqual({
//     //     type: 'SUCCESS',
//     //   });
//   });
// });
