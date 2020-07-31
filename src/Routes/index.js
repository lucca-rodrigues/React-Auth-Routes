import React from 'react';
import { Switch } from 'react-router-dom';

import Login from '../pages/Login';
import Main from '../pages/Main';

import Route from './Route';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/main" exact component={Main} isPrivate />
    </Switch>
  );
}