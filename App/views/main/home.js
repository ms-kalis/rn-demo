import React from 'react';
import { View, Text, Button, Platform } from 'react-native';

import LogoTitle from '../../components/header/logoTitle';

class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: <LogoTitle />,
    headerLeft: (
      <Button
        onPress={() => navigation.navigate('MyModal')}
        title="Info"
        color={Platform.OS === 'ios' ? '#fff' : null}
      />
    ),
    headerRight: (
      <Button onPress={navigation.getParam('increaseCount')} title="+1" color={Platform.OS === 'ios' ? '#fff' : null} />
    )
  });

  state = {
    count: 0
  };

  constructor(props) {
    super(props);
    const { navigation } = this.props;
    navigation.setParams({ increaseCount: this.increaseCount });
  }

  increaseCount = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  };

  render() {
    const { count } = this.state;
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Text>Count: {count}</Text>
        <Button title="Go to Movies" onPress={() => navigation.navigate('Movies')} />
        <Button title="Update the title" onPress={() => navigation.setParams({ otherParam: 'Updated!' })} />
        <Button title="get appinfo" onPress={() => navigation.navigate('AppInfo')} />
        <Button title="get WeiXinAuth" onPress={() => navigation.navigate('WeiXinAuth')} />
        <Button title="get VideosSimple" onPress={() => navigation.navigate('VideosSimple')} />
        <Button title="get VideosRtmp" onPress={() => navigation.navigate('VideosRtmp')} />
      </View>
    );
  }
}

export default HomeScreen;
