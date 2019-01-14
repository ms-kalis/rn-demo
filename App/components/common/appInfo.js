import React from 'react';
import { View, Text } from 'react-native';
import PushUtil from '../../natives/PushUtil';

// async function appinfo() {
//   return appInfo001;
// }

class AppInfo extends React.Component {
  constructor(props) {
    super(props);
    this.bootstrapAsync();
  }

  state = {
    appinfo: ''
  };

  componentDidMount() {
    setTimeout(() => {
      this.bootstrapAsync();
      PushUtil.addAliasType();
    }, 1000);
  }

  bootstrapAsync = async () => {
    const appInfo001 = await PushUtil.appInfo();
    this.setState({ appinfo: appInfo001 });
  };

  render() {
    const { appinfo } = this.state;
    return (
      <View>
        <Text>{appinfo}</Text>
      </View>
    );
  }
}

export default AppInfo;
