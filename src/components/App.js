import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Content, Header } from '.';
import { Signin, Signup } from '../containers';

const App = () => (
  <div>
    <Header />
    <div className="container">
      <Switch>
        <Route path="/sign-in" render={Signin} />
        <Route path="/sign-up" render={Signup} />
        <Route path="/" render={Content} />
      </Switch>
    </div>
  </div>
);

export default App;
