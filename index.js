// import { registerRootComponent } from 'expo';
//
// import App from './App';
//
// // registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// // It also ensures that whether you load the app in the Expo client or in a native build,
// // the environment is set up appropriately
//
// registerRootComponent(App);

/**
 * Initial expo set up above
 */


// import { AppRegistry } from 'react-native';
import { registerRootComponent } from 'expo';
import React from 'react';
import App from './App';
// import { name as appName } from './app.json';
import { Provider } from 'react-redux';

import configureStore from './redux/store/configureStore';

const store = configureStore();

const RNRedux = () => (
    <Provider store = { store }>
        <App />
    </Provider>
);

// AppRegistry.registerComponent(appName, () => RNRedux);
registerRootComponent(RNRedux);
