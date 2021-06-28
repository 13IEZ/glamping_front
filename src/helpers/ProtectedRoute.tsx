import React from 'react';
import { Redirect, Route } from 'react-router';

interface IProtectedRoute {
  isAllowed: boolean;
  redirectTo: string;
  path: string;
  exact: boolean;
  component: React.FunctionComponent;
}

const ProtectedRoute: React.FunctionComponent<IProtectedRoute> = ({
  isAllowed,
  redirectTo,
  ...props
}: IProtectedRoute) => {
  return isAllowed ? <Route {...props} /> : <Redirect to={redirectTo} />;
};

export default ProtectedRoute;
