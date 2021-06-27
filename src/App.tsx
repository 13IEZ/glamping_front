import React from 'react';
import Register from './pages/Register/Register';
import ProtectedRoute from './helpers/ProtectedRoute';
import { Switch, Route } from 'react-router';
import { useTypedSelectorHook } from './hooks/useTypedSelector';
import Main from './pages/Main/Main';
import { Layout } from 'antd';

function App(): JSX.Element {
  const { user } = useTypedSelectorHook(state => state.users);

  return (
    <>
      <Layout style={{ backgroundColor: '#fff' }}>
        <Route path='/' exact component={Main} />
        <Switch>
          <ProtectedRoute isAllowed={!user} path='/register' exact redirectTo='/' component={Register} />
        </Switch>
      </Layout>
    </>
  );
}

export default App;
