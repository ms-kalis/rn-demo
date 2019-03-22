import { createStackNavigator } from 'react-navigation';

import AppNavigator from './app';
import ModalScreen from '../components/common/modal';

const ModalStack = createStackNavigator(
  {
    Main: {
      screen: AppNavigator
    },
    MyModal: {
      screen: ModalScreen
    }
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
);

export default ModalStack;
