import React from "react";
import { View, Text, Button, Platform } from "react-native";
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from "react-navigation";
import Ionicons from 'react-native-vector-icons/Ionicons';
import MoviesScreen from './movies'
import DetailsScreen from './details'
import LogoTitle from '../components/header/logoTitle'
import ModalScreen from '../components/common/modal'
import SettingsScreen from './user/settings'
import MainScreen from './main/home'


class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) =>  {
    return {
      headerTitle: <LogoTitle />,
      headerLeft: (
        <Button
          onPress={() => navigation.navigate('MyModal')}
          title="Info"
          color={Platform.OS === 'ios' ? '#fff' : null}
        />
      ),
      headerRight: (
        <Button
          onPress={navigation.getParam('increaseCount')}
          title="+1"
          color={Platform.OS === 'ios' ? '#fff' : null}
        />
      ),
    }
  };
  componentDidMount() {
    this.props.navigation.setParams({ increaseCount: this._increaseCount });
  }

  state = {
    count: 0,
  };

  _increaseCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <Text>Count: {this.state.count}</Text>
        <Button
          title="Go to Movies"
          onPress={() => this.props.navigation.navigate('Movies')}
        />
        <Button
          title="Update the title"
          onPress={() => this.props.navigation.setParams({otherParam: 'Updated!'})}
        />
      </View>
    );
  }
}
// 用法一
// const AppNavigator = createStackNavigator({ Home: { screen: HomeScreen } });

// 用法二
// const AppNavigator = createStackNavigator({
//   Hello: HomeScreen,
//   Movies: MoviesScreen,
//   Details: DetailsScreen
// })

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

const RootStack = createStackNavigator(
  {
    Main: {
      screen: AppNavigator,
    },
    MyModal: {
      screen: ModalScreen,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);

// const Home = createStackNavigator(
//   {
//     Feed: ExampleScreen,
//     Profile: ExampleScreen,
//   }, {
//     defaultNavigationOptions: {
//       headerTintColor: '#fff',
//       headerStyle: {
//         backgroundColor: '#000',
//       },
//     },
//     navigationOptions: {
//       tabBarLabel: 'Home!',
//     },
//   }
// );

// const Tabs = createBottomTabNavigator({ Home });

const TabNavigator = createBottomTabNavigator(
  {
    Home: RootStack,
    Settings: SettingsScreen,
    Others: MainScreen
  },
  {
    initialRouteName: 'Others',
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Settings') {
          iconName = `ios-settings`;
        } else {
          iconName = `ios-options`
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray'
    },
  }
  );


// export default createAppContainer(AppNavigator);
// export default createAppContainer(RootStack);
export default createAppContainer(TabNavigator);

