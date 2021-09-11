import React from 'react';

import { Layout } from 'antd';
import { Route, Switch, useLocation } from 'react-router';

import AppToolbar from './components/UI/AppToolbar/AppToolbar';
import CustomFooter from './components/UI/CustomFooter/CustomFooter';
import ProtectedRoute from './helpers/ProtectedRoute';
import { useTypedSelectorHook } from './hooks/useTypedSelector';
import Accommodations from './pages/Accommodations/Accommodations';
import CurrentAccommodation from './pages/CurrentAccommodation/CurrentAccommodation';
import CurrentLocation from './pages/CurrentLocation/CurrentLocation';
import Locations from './pages/Locations/Locations';
import LocationsMap from './pages/LocationsMap/LocationsMap';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import NewLocation from './pages/NewLocation/NewLocation';
import Pay from './pages/Pay/Pay';
import PitchRentalForm from './pages/Pitches/PitchRentalForm';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Register from './pages/Register/Register';
import NewProduct from './pages/Store/components/NewProduct/NewProduct';
import Store from './pages/Store/Store';
import UserPersonalArea from './pages/UserPersonalArea/UserPersonalArea';

function App(): JSX.Element {
  const { user } = useTypedSelectorHook(state => state.users);
  const location = useLocation();

  return (
    <Layout style={{ backgroundColor: '#f9faf7' }}>
      <AppToolbar />
      <div className='content_body'>
        <Route path='/' exact component={Main} />
        <Switch>
          <ProtectedRoute isAllowed={!user} path='/register' exact redirectTo='/' component={Register} />
          <ProtectedRoute isAllowed={!user} path='/login' exact redirectTo='/' component={Login} />
          <Route path='/store/:queryStr' component={Store} />
          <ProtectedRoute isAllowed={!!user} path='/newProduct' exact redirectTo='/login' component={NewProduct} />
          <Route path='/storedetail/:id' exact component={ProductDetail} />
          <Route path='/locations-map' exact component={LocationsMap} />
          <Route path='/locations' exact component={Locations} />
          <ProtectedRoute
            isAllowed={!!user}
            path='/locations/new-location'
            exact
            redirectTo='/login'
            component={NewLocation}
          />
          <Route path='/locations/:id' exact component={CurrentLocation} />
          <Route path='/accommodations/:queryStr' exact component={Accommodations} />
          <Route path='/currentaccommodations/:id' exact component={CurrentAccommodation} />
          <Route path='/pich/:id' exact component={PitchRentalForm} />
          <ProtectedRoute
            isAllowed={!!user}
            path='/user-personal-area'
            exact
            redirectTo='/login'
            component={UserPersonalArea}
          />
          <Route path='/pay' exact component={Pay} />
        </Switch>
      </div>
      {location.pathname === '/locations-map' ||
      location.pathname === '/' ||
      location.pathname === '/register' ||
      location.pathname === '/login' ? null : (
        <CustomFooter />
      )}
    </Layout>
  );
}

export default App;
