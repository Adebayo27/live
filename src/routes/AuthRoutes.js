import React from 'react';
import { Route, useHistory } from 'react-router-dom';

export default function AuthRoute({ children, exact, ...rest }) {
  let history = useHistory();
  
  const token = localStorage.getItem('token');
  return (
    <Route
      {...rest}
      exact
      render={({ location }) =>
        token
          ? children
          : history.push(`/auth/login?next_url=${location.pathname}`)
      }
    />
  );
}
