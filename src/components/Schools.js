import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Students, NewStudent } from '../containers';

const Schools = () => (
  <Switch>
    <Route path="/schools/:schoolId/students/new" component={NewStudent} />
    <Route path="/schools/:schoolId/students" component={Students} />;
  </Switch>
);

export default Schools;
