import { combineReducers } from 'redux';

import session from './session_reducer';
import profile from './profile_reducer';
import errors from './errors/errors_reducer';

const RootReducer = combineReducers({
  session,
  profile,
  errors
});

export default RootReducer;