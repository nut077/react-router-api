import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Schools, NotFound } from '.';
import { Sidebar } from '../containers';

const Content = () => (
  <div className="row">
    <Sidebar />
    <div className="col-7">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/schools/*" component={Schools} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </div>
);

export default Content;
