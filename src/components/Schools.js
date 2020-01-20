import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Students, NewStudent, Student, EditStudent } from '../containers';

const Schools = () => (
  <Switch>
    <Route
      exact
      path="/schools/:schoolId/students/new"
      component={NewStudent}
    />
    <Route exact path="/schools/:schoolId/students" component={Students} />
    <Route
      exact
      path="/schools/:schoolId/students/:studentId"
      component={Student}
    />
    <Route
      exact
      path="/schools/:schoolId/students/:studentId/edit"
      component={EditStudent}
    />
  </Switch>
);

export default Schools;
