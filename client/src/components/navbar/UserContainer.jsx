import { connect } from 'react-redux';
import User from './User';

const mSP = state => ({
  userId: state.session.user.id,
  user: state.session.user.username,
  businessName: state.profile.businessName
});

const mDP = dispatch => ({
});

export default connect(mSP, mDP)(User);