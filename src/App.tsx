/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {ReactElement} from 'react';
import {Provider} from 'react-redux';
import MainNavigation from './navigation/MainNavigation';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import {store} from './store';

export default function App(): ReactElement {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <MainNavigation />
      </Provider>
    </GestureHandlerRootView>
  );
}
