import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

class SignInScreen extends React.Component {
  static navigationOptions = {
    title: 'Please sign in'
  };

  signInAsync = async () => {
    const { navigation } = this.props;
    await AsyncStorage.setItem('userToken', 'abc');
    navigation.navigate('App');
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="Sign in!" onPress={this.signInAsync} />
      </View>
    );
  }
}

export default SignInScreen;
