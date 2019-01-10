import('../ReactotronConfig')
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from './store'
import Navigator from './navigator'
import SplashScreen from 'react-native-splash-screen';

const store = configureStore()

export default class AppContainer extends Component{
  render() {
    return (
      <Provider store={store}>
        {/* <App /> */}
        <Navigator />
      </Provider>
    )
  }
  componentDidMount() {
    SplashScreen.hide()    
  }
}
