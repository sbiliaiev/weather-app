import { Map } from 'immutable';

import constant from '../constants/appConstants';

const initialState = Map({
  isUserLoggedIn: false,
  token: '',
  currenUser: Map({
    id: '',
    email: '',
    name: '',
  }),
});

export default function (state = initialState, action) {
  switch (action.type) {
    case constant.SET_USER_LOGGED_IN:
      return state
        .set('isUserLoggedIn', true)
        .set('token', action.token)
        .set('currenUser', action.currentUser);
    case constant.SER_USER_LOGGED_OUT:
      return state
        .set('isUserLoggedIn', initialState.get('isUserLoggedIn'))
        .set('token', initialState.get('token'))
        .set('currenUser', initialState.get('currenUser'));
    default:
      return state;
  }
}
