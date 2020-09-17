import { connect } from 'react-redux';
import { updateProfile } from '../../actions/profile_actions';
import BusinessProfile from './BusinessProfile';

const mSP = state => ({
  errors: state.errors.session,
  userId: state.session.user.id
});

const mDP = dispatch => ({
  updateProfile: data => dispatch(updateProfile(data))
});

export default connect(mSP, mDP)(BusinessProfile);