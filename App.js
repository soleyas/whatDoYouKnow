//react
import React from 'react';

//redux
import { Provider } from 'react-redux';
import configureStore from './src/reducers/configureStore';

//Navigation
import AppContainer from './src/navigation/AppNavigator';

const store = configureStore();

export default (App = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
));
