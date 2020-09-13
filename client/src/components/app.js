import React from 'react';
import { Switch } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Main from './main/Main';

const App = () => (
  <div>

    <Switch>
      <AuthRoute exact path="/" component={Main} />
    </Switch>
  </div>
);

export default App;