import React from 'react';
import { View, Button, Text } from 'react-native';
import ShareUtile from '../../natives/ShareUtil';

class WeiXinAuth extends React.Component {
  state = {
    result: '',
    code: ''
  };

  constructor(props) {
    super(props);
    this.getWXinfo = this.getWXinfo.bind(this);
  }

  getWXinfo = () => {
    ShareUtile.auth(2, (code, result, message) => {
      this.setState({ result: message, code });
      if (code === 0) {
        this.setState({ result: result.uid });
      }
    });
  };

  render() {
    const { result, code } = this.state;
    return (
      <View>
        <Button title="wechat auth" onPress={this.getWXinfo()} />
        <Text>{result}</Text>
        <Text>code: {code}</Text>
      </View>
    );
  }
}

export default WeiXinAuth;
