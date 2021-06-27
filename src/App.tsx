import React from 'react';

import { Switch } from 'react-router';

import AppToolbar from './components/UI/AppToolbar/AppToolbar';
import ProtectedRoute from './helpers/ProtectedRoute';
import { useTypedSelectorHook } from './hooks/useTypedSelector';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import Register from './pages/Register/Register';

function App(): any {
  const { user } = useTypedSelectorHook(state => state.users);

  return (
    <>
      <AppToolbar />
      <Switch>
        <ProtectedRoute
          isAllowed={true}
          redirectTo={'/login'}
          path='/'
          exact
          component={Main}
        />
        <ProtectedRoute 
          isAllowed={true}
          redirectTo={'/'}  
          path='/register' 
          exact 
          component={Register}
        />
        <ProtectedRoute 
          isAllowed={true} 
          redirectTo={'/login'}
          path='/login' 
          exact 
          component={Login} />
      </Switch>
    </>
  );
}

export default App;
