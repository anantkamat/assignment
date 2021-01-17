import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import {Provider as StoreProvider} from 'react-redux';
import store from '@redux/CreateStore';
import {PersistGate} from 'redux-persist/es/integration/react';
import {persistStore} from 'redux-persist';

const persistor = persistStore(store);

AppRegistry.registerComponent(appName, () => App);
const Assignment = () => (
  <StoreProvider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </StoreProvider>
);

AppRegistry.registerComponent(appName, () => Assignment);
