import { createSwitchNavigator, createStackNavigator } from 'react-navigation';
import AuthLoadingScreen from '../views/user/loading';
import DrawerNavigator from './drawer';
import SignInScreen from '../views/user/signIn';

const AuthNavigator = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: DrawerNavigator,
    Auth: createStackNavigator({ signIn: SignInScreen })
  },
  {
    initialRouteName: 'AuthLoading'
  }
);

export default AuthNavigator;
