import React from 'react';

import { Layout } from 'antd';
import {
  Route,
  Switch,
} from 'react-router';

import ProtectedRoute from './helpers/ProtectedRoute';
import { useTypedSelectorHook } from './hooks/useTypedSelector';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import Register from './pages/Register/Register';
import ReviewForm from './pages/ReviewForm/ReviewForm';
import Reviews from './pages/Reviews/Reviews';

function App(): JSX.Element {
  const { user } = useTypedSelectorHook(state => state.users);

  return (
    <Layout style={{ backgroundColor: '#fff' }}>
      <Route path='/' exact component={Main} />
      <Switch>
        <ProtectedRoute isAllowed={true} path='/register' exact redirectTo='/' component={Register} />
        <ProtectedRoute isAllowed={true} path='/login' exact redirectTo='/' component={Login} />
        <ProtectedRoute isAllowed={true} path='/reviews' exact redirectTo='/' component={Reviews } />
        <ProtectedRoute isAllowed={true} path='/reviews/new' exact redirectTo='/' component={ReviewForm } />
      </Switch>
    </Layout>
  );
}

export default App;
