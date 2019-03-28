/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import {Platform, StyleSheet, Text, View} from 'react-native';
import NavigationService from './src/redux/NavigationService';
import { PersistGate } from 'redux-persist/integration/react';
import store,{persistor} from './src/redux/store';
import Routes from './src/routes/routes';
import React, {Component} from 'react';
import { Provider } from 'react-redux';


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading = {null} persistor={persistor}>
        <Routes 
           ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
        </PersistGate>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
