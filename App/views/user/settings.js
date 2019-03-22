import React from 'react';
import { Text, View, Button } from 'react-native';

function SettingsScreen(props) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
      <Button title="Go to Home" onPress={() => props.navigation.navigate('Home')} />
      <Button title="Go to Details" onPress={() => props.navigation.navigate('Details')} />
    </View>
  );
}

export default SettingsScreen;
