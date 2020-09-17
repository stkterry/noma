import { 
  RECEIVE_USER_LOGOUT, 
  RECEIVE_USER_LOGIN,
  RECEIVE_CURRENT_USER
} from '../actions/session_actions';

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default function(state = initialState, action) {
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !!action.currentUser,
        user: action.currentUser
      };
    case RECEIVE_USER_LOGOUT:
      return {
        ...state,
        isAuthenticated: !!action.currentUser,
        user: action.currentUser
      };
    case RECEIVE_USER_LOGIN:
      return {
        ...state,
        isSignedIn: true
      };
    default:
      return state;
  }
}