import { connect } from 'react-redux';
import Landing from './Landing';
import { getProfile } from '../../actions/profile_actions';
import { logout } from '../../actions/session_actions';

const mSP = state => ({
  userId: state.session.user.id,
  user: state.session.user.username,
  profile: state.profile
});

const mDP = dispatch => ({
  getProfile: userId => dispatch(getProfile(userId)),
  logout: () => dispatch(logout())
});

export default connect(mSP, mDP)(Landing);