import React, { Component } from 'react';
import { Provider } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import configureStore from './store';
import Navigator from './navigator';

import('../ReactotronConfig');

const store = configureStore();

export default class AppContainer extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}
