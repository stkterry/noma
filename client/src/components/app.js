import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginFormContainer from './session/LoginFormContainer';
import SignupFormContainer from './session/SignupFormContainer';
import BusinessProfileContainer from './businessProfile/BusinessProfileContainer';
import LandingContainer from './landing/LandingContainer';
import DeadEnd from './util/DeadEnd';

const App = () => (
  <div>

    <Switch>
      <AuthRoute exact path="/" component={LoginFormContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />

      <ProtectedRoute exact path="/landing" component={LandingContainer} />
      <ProtectedRoute exact path="/businessProfile" component={BusinessProfileContainer} />

      <Route exact path="/deadend" component={DeadEnd} />
    </Switch>
  </div>
);

export default App;