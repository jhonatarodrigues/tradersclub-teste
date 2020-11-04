import React from 'react';
import { Provider } from 'react-redux';
import Store from './store';
import Routes from './routes';
import './styles/global.scss';

const App = () => (
  <Provider store={Store}>
    <Routes />
  </Provider>
);

export default App;
