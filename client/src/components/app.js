import React from 'react';
import { Switch } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Main from './main/Main';
import LoginFormContainer from './session/LoginFormContainer';
import SignupFormContainer from './session/SignupFormContainer';
import BusinessProfileContainer from './businessProfile/BusinessProfileContainer';

const App = () => (
  <div>

    <Switch>
      <AuthRoute exact path="/" component={Main} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />

      <ProtectedRoute exact path="/landing" component={Main} />
      <ProtectedRoute exact path="/businessProfile" component={BusinessProfileContainer} />
    </Switch>
  </div>
);

export default App;