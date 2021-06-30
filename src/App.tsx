import React from 'react';

import { Layout } from 'antd';
import {
  Route,
  Switch,
} from 'react-router';

import AppToolbar from './components/UI/AppToolbar/AppToolbar';
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
      <AppToolbar />
      <Route path='/' exact component={Main} />
      <Switch>
        <ProtectedRoute 
          isAllowed={!user} 
          path='/register' 
          exact 
          redirectTo='/' 
          component={Register}
        />
        <ProtectedRoute 
          isAllowed={!user} 
          path='/login' 
          exact 
          redirectTo='/' 
          component={Login} 
        />
        <Route 
          path='/reviews' 
          exact
          component={Reviews } 
        />
        <ProtectedRoute 
          isAllowed={!user} 
          path='/reviews/new' 
          exact 
          redirectTo={'/login'} 
          component={ReviewForm } 
        />
      </Switch>
    </Layout>
  );
}

export default App;
