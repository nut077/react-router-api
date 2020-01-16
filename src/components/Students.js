import React from 'react';
import { Route } from 'react-router-dom';
import { Student } from '../containers';

const Students = () => (
  <Route path="/students/id/:studentId" component={Student}></Route>
);

export default Students;
