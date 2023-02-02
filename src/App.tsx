/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

import { store } from './app/store';
import { NetworkInfoContextProvider } from './context/NetworkInfoContext';
import { Navigation } from './navigation';

function App(): JSX.Element {
  return (
    <NetworkInfoContextProvider>
      <Provider store={store}>
        <SafeAreaProvider>
          <Navigation />
        </SafeAreaProvider>
      </Provider>
    </NetworkInfoContextProvider>
  );
}

export default App;
