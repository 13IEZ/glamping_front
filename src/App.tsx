import React from 'react';
import Register from './pages/Register/Register';
import AppToolbar from './components/UI/AppToolbar/AppToolbar';
import ProtectedRoute from './helpers/ProtectedRoute';
import { Switch } from 'react-router';
import { useTypedSelectorHook } from './hooks/useTypedSelector';

function App(): any {
  const { user } = useTypedSelectorHook(state => state.users);

  return (
    <>
      <AppToolbar />
      <Switch>
        <ProtectedRoute isAllowed={!user} path='/register' exact redirectTo='/' component={Register} />
      </Switch>
    </>
  );
}

export default App;
