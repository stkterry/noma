import { connect } from 'react-redux';
import { signup, login } from '../../actions/session_actions';
import SignupForm from './SignupForm';

const mSP = state => ({
  errors: state.errors.session,
  isSignedIn: state.session.isSignedIn
});

const mDP = dispatch => ({
  signup: user => dispatch(signup(user)),
  login: user => dispatch(login(user))
});

export default connect(mSP, mDP)(SignupForm);