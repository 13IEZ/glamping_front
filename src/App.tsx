import React from 'react';

import { Layout } from 'antd';
import { Route, Switch } from 'react-router';

import AppToolbar from './components/UI/AppToolbar/AppToolbar';
import ProtectedRoute from './helpers/ProtectedRoute';
import { useTypedSelectorHook } from './hooks/useTypedSelector';
import GLMapForm from './pages/Location/GLMap';
import MapLocation from './pages/Location/MapLocation';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Register from './pages/Register/Register';
import ReviewForm from './pages/ReviewForm/ReviewForm';
import Reviews from './pages/Reviews/Reviews';
import NewProduct from './pages/Store/components/NewProduct/NewProduct';
import Store from './pages/Store/Store';

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
        <ProtectedRoute isAllowed={!!user} path='/reviews/new' exact redirectTo={'/login'} component={ReviewForm} />
        <Route path='/store' exact component={Store} />
        <ProtectedRoute isAllowed={!!user} path='/store/new' exact redirectTo={'/login'} component={NewProduct} />
        <Route path='/store/:id' exact component={ProductDetail} />
        <Route path='/location' exact component={GLMapForm} />
        <Route path='/maplocation/:hint' exact component={MapLocation} />
      </Switch>
    </Layout>
  );
}

export default App;
