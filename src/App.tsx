import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PageLayout from './layout';
import Login from './pages/login';

function App() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/" component={PageLayout} />
    </Switch>
  );
}

export default App;
