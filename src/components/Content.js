import React from 'react';
import { Route } from 'react-router-dom';
import { Home, Schools } from '.';
import { Sidebar } from '../containers';

const Content = () => (
  <div className="row">
    <Sidebar />
    <div className="col-7">
      <Route exact path="/" component={Home} />
      <Route path="/students/schools/*" component={Schools} />
    </div>
  </div>
);

export default Content;
