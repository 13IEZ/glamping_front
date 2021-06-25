import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Register from './pages/Register/Register';

function App(): any {
  return (
    <div className='App'>
      <Switch>
        <Route path='/register' component={Register} exact />
      </Switch>
      <header className='App-header'>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
