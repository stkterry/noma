
import jwt_decode from 'jwt-decode';
import axios from 'axios';

import { setAuthToken } from '../util/session_api_util';


// Axios =======================================================================
export const APICalls = {
  signup: userData => axios.post('/api/users/register', userData),
  login: userData => axios.post('/api/users/login', userData)
}

// Dispatch Labels =============================================================
export const RECEIVE_USER_LOGOUT = "RECEIVE_USER_LOGOUT";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RECEIVE_USER_LOGIN = "RECEIVE_USERS_LOGIN";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";

// Dispatch Objs ===============================================================
export const logoutUser = () => ({
  type: RECEIVE_USER_LOGOUT
});

export const receiveUserLogin = () => ({
  type: RECEIVE_USER_LOGIN
});

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser: currentUser
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors: errors
})

// Dispatch Functions ==========================================================
export const logout = () => dispatch => {
  localStorage.removeItem('jwtToken');
  setAuthToken(false);
  dispatch(logoutUser());
}

export const signup = user => dispatch => APICalls.signup(user)
  .then(
    () => dispatch(receiveUserLogin()),
    err => dispatch(receiveErrors(err.response.data))
  );

// Set session token and dispatch user on login
export const login = user => dispatch => APICalls.login(user)
  .then(
    res => {
      const { token } = res.data;
      localStorage.setItem('jwtToken', token);
      setAuthToken(token);
      const decodedUser = jwt_decode(token);
      dispatch(receiveCurrentUser(decodedUser));
    }
  )
  .catch(err => dispatch(receiveErrors(err.response.data)));