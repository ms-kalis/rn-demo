import { createDrawerNavigator } from 'react-navigation'
import TabNavigator from './tab';
import MyNotificationsScreen from '../components/common/notification';



const DrawerNavigator = createDrawerNavigator({
  Home: TabNavigator,
  Notification: MyNotificationsScreen
})

export default DrawerNavigator
