import { createStackNavigator } from "react-navigation";

import HomeScreen from '../views/main/home';
import MoviesScreen from '../views/movies'
import DetailsScreen from '../views/details';

const AppNavigator = createStackNavigator({
  Hello: HomeScreen,
  Movies: MoviesScreen,
  Details: DetailsScreen,
}, {
  initialRouteName: 'Hello',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
});

export default AppNavigator
