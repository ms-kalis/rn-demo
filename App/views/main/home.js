import React from 'react'
import { View, Text, Button, Platform } from "react-native";

import LogoTitle from '../../components/header/logoTitle'



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

export default HomeScreen
