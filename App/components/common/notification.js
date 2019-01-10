import React from 'react'
import { View, Image, Button, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Notifications',
    drawerIcon: ({ tintColor }) => {
      const name = 'ios-notifications'
      const isH = true
      return <Ionicons name={name} size={isH ? 25 : 20} color={tintColor} />
    }
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
      />
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

export default MyNotificationsScreen
