import React from 'react';
import { Route } from 'react-router-dom';
import { Student } from '../containers';

const Students = () => (
  <Route to="/students/id/:id" component={Student}></Route>
);

export default Students;
