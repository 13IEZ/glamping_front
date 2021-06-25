import './index.scss';
import 'antd/dist/antd.css';

import React from 'react';
import ReactDOM from 'react-dom';

import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';

import App from './App';
import store, { history } from './store/configureStore';

const app = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
