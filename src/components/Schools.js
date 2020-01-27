import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  Students,
  NewStudent,
  Student,
  EditStudent,
  NewSchool
} from '../containers';

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
    <Route exact path="/schools/add" component={NewSchool} />
  </Switch>
);

export default Schools;
