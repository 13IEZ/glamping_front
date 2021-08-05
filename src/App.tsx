import React from 'react';

import { Layout } from 'antd';
import { Route, Switch } from 'react-router';

import AppToolbar from './components/UI/AppToolbar/AppToolbar';
import ProtectedRoute from './helpers/ProtectedRoute';
import { useTypedSelectorHook } from './hooks/useTypedSelector';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Register from './pages/Register/Register';
import Reviews from './pages/Reviews/Reviews';
import NewProduct from './pages/Store/components/NewProduct/NewProduct';
import Store from './pages/Store/Store';
import LocationsMap from './pages/LocationsMap/LocationsMap';
import Locations from './pages/Locations/Locations';

function App(): JSX.Element {
  const { user } = useTypedSelectorHook(state => state.users);

  return (
    <Layout style={{ backgroundColor: '#fff' }}>
      <AppToolbar />
      <Route path='/' exact component={Main} />
      <Switch>
        <ProtectedRoute isAllowed={!user} path='/register' exact redirectTo='/' component={Register} />
        <ProtectedRoute isAllowed={!user} path='/login' exact redirectTo='/' component={Login} />
        <Route path='/reviews' exact component={Reviews} />
        <Route path='/store' exact component={Store} />
        <ProtectedRoute isAllowed={!!user} path='/store/new' exact redirectTo={'/login'} component={NewProduct} />
        <Route path='/store/:id' exact component={ProductDetail} />
        <Route path='/locations-map' exact component={LocationsMap} />
        <Route path='/locations' exact component={Locations} />
      </Switch>
    </Layout>
  );
}

export default App;
