import { createStackNavigator } from 'react-navigation';

import OnlineWebView from '../views/webview/online';

const WebViewNavigator = createStackNavigator(
  {
    online: OnlineWebView
  },
  {
    initialRouteName: 'online',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }
  }
);

export default WebViewNavigator;
