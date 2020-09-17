import { connect } from 'react-redux';
import Navbar from './Navbar';
import { logout } from '../../actions/session_actions';

const mSP = state => ({
});

const mDP = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mSP, mDP)(Navbar);