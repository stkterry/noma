import { RECEIVE_PROFILE } from '../actions/profile_actions';

export default function (state = {}, action) {
  switch (action.type) {
    case RECEIVE_PROFILE:
      return action.profile.data;
    default:
      return state;
  }
}