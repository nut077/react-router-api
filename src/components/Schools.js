import React from 'react';
import { Route } from 'react-router-dom';
import { Students } from '../containers';

const Schools = () => <Route to="/students/schools/:id" component={Students} />;

export default Schools;
