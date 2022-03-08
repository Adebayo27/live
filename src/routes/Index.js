import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';
import ScrollTop from './ScrollTop';

export default function Routes() {
  return (
    <Router>
      <ScrollTop>
        <Switch>
          <PublicRoutes />
        </Switch>
        <PrivateRoutes />
      </ScrollTop>
    </Router>
  );
}
