import React from 'react';
import ReactDOM from 'react-dom';
import jwt_decode from 'jwt-decode';

import Root from './components/root';
import configureStore from './store/store';
import { setAuthToken } from './util/session_api_util';
import { logout } from './actions/session_actions';

import "./assets/stylesheets/App.css";

document.addEventListener('DOMContentLoaded', () => {
  let store;

  if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);

    const decodeUser = jwt_decode(localStorage.jwtToken);
    const preloadedState = { session: { isAuthenticated: true, user: decodeUser }};
    store = configureStore(preloadedState);

    if (decodeUser.exp < Date.now / 1000) {
      store.dispatch(logout());
      window.location.href = "/login";
    }
  } else store = configureStore({});

  const root = document.getElementById('root');

  ReactDOM.render(<Root store={store} />, root);
})