import React from 'react';
import { Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Notifications',
    drawerIcon: ({ tintColor }) => {
      const name = 'ios-notifications';
      const isH = true;
      return <Ionicons name={name} size={isH ? 25 : 20} color={tintColor} />;
    }
  };

  render() {
    const { navigation } = this.props;
    return <Button onPress={() => navigation.goBack()} title="Go back home" />;
  }
}

export default MyNotificationsScreen;
