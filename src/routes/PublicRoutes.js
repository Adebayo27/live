import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import Home from '../pages/public/Home';
import AuthVendor from '../pages/auth/vendor'
import VendorWrapper from '../pages/auth/vendorWrapper'
import SignUp from '../pages/auth/SignUp';
import CoporateSignup from '../pages/auth/CoporateSignup';
import IndividualSignup from '../pages/auth/IndividualSignup';
import Notify from '../pages/auth/Notify';
import Login from '../pages/auth/Login';
import Recovery from '../pages/auth/Recovery';
import Recovery2 from '../pages/auth/Recovery2';
export default function PublicRoutes() {
  return (
    <Switch>
      <Route exact path="/auth/vendor">
        <AuthVendor />
      </Route>

      <Route exact path="/">
        <Login />
      </Route>

      <Route exact path="/signup-trial">
        <VendorWrapper />
      </Route>

      <Route exact path="/auth/signup">
        <SignUp />
      </Route>

      <Route exact path="/auth/coporate">
        <CoporateSignup />
      </Route>

      <Route exact path="/auth/individual">
        <IndividualSignup/>
      </Route>

      <Route exact path="/auth/notify">
        <Notify />
      </Route>

      <Route exact path="/auth/login">
       <Login/>
      </Route>

      <Route exact path="/auth/recovery">
       <Recovery/>
      </Route>

      <Route exact path="/auth/recovery2">
       <Recovery2/>
      </Route>

      <Redirect from="/auth" exact={true} to="/auth/login" />
    </Switch>
  );
}
