import React from 'react'
import { Image } from 'react-native';

class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={require('../../asserts/images/spiro.png')}
        style={{ width: 30, height: 30 }}
      />
    );
  }
}

export default LogoTitle
