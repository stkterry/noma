
import jwt_decode from 'jwt-decode';

import { setAuthToken } from '../util/session_api_util';

export const RECEIVE_USER_LOGOUT = "RECEIVE_USER_LOGOUT";

export const logoutUser = () => ({
  type: RECEIVE_USER_LOGOUT
});

export const logout = () => dispatch => {
  localStorage.removeItem('jwtToken');
  setAuthToken(false);
  dispatch(logoutUser());
}