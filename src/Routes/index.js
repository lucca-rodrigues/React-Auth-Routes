import React from 'react';
import { Switch } from 'react-router-dom';

import Login from '../Pages/Login';
import Main from '../Pages/Main';

import Route from './route';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/main" exact component={Main} isPrivate />
    </Switch>
  );
}