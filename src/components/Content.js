import React from 'react';
import { Route } from 'react-router-dom';
import { Home, Schools, Students } from '.';
import { Sidebar } from '../containers';

const Content = () => (
  <div className="row">
    <Sidebar />
    <div className="col-7">
      <Route exact path="/" component={Home} />
      <Route exact path="/students/id/*" component={Students} />
      <Route exact path="/schools/*" component={Schools} />
    </div>
  </div>
);

export default Content;
