/* eslint-disable class-methods-use-this */
import React from 'react';
import { View, StyleSheet, NativeModules, NativeEventEmitter, Button } from 'react-native';
import { RtmpView } from 'react-native-rtmpview';

const styles = StyleSheet.create({
  container: {},
  player: {
    width: '100%',
    height: '50%'
  }
});

export default class VideoRtmp extends React.Component {
  state = {
    url: 'rtmp://202.69.69.180:443/webcast/bshdlive-pc'
  };

  constructor(props, context) {
    super(props, context);
    this.player = null;

    // eslint-disable-next-line prefer-destructuring
    const RNRtmpEventManager = NativeModules.RNRtmpEventManager;

    if (!(typeof RNRtmpEventManager === 'undefined')) {
      // eslint-disable-next-line no-shadow
      const RNRtmpEventManager = new NativeEventEmitter(NativeModules.RNRtmpEventManager);

      RNRtmpEventManager.addListener('RNRtmpEvent', data => this.handleRNRtmpEvent(data));

      console.log('React Native Received: Just finished adding listeners');
    }
  }

  componentDidMount() {
    this.player.initialize();
  }

  // eslint-disable-next-line class-methods-use-this
  handlePlaybackState(data) {
    console.log(`React Native Received PlaybackState ${data.nativeEvent.state}`);
  }

  handleLoadState(data) {
    console.log(`React Native Received LoadState ${data.nativeEvent.state}`);
    // eslint-disable-next-line no-console
    console.log(`React Native Received LoadState Qos ${JSON.stringify(data.nativeEvent.qos)}`);
  }

  handleFirstVideoFrameRendered() {
    console.log('React Native Received FirstVideoFrameRendered');

    this.player.unmute();
  }

  handleBitrateRecalculated(data) {
    console.log(`React Native BitrateRecalculated ${JSON.stringify(data.nativeEvent.bitrate)}`);
  }

  handleRNRtmpEvent(data) {
    console.log(`React Native Received RNRtmpEventManager ${JSON.stringify(data)}`);
  }

  render() {
    const { url } = this.state;
    return (
      <View style={styles.container}>
        <RtmpView
          style={styles.player}
          shouldMute={false}
          ref={e => {
            this.player = e;
          }}
          onPlaybackState={data => {
            this.handlePlaybackState(data);
          }}
          onLoadState={data => {
            this.handleLoadState(data);
          }}
          onFirstVideoFrameRendered={data => {
            this.handleFirstVideoFrameRendered(data);
          }}
          onBitrateRecalculated={data => {
            this.handleBitrateRecalculated(data);
          }}
          url={url}
        />

        <Button
          onPress={() => {
            this.player.pause();
          }}
          title="Pause"
        />
        <Button
          onPress={() => {
            this.player.play();
          }}
          title="Play"
        />
        <Button
          onPress={() => {
            this.player.mute();
          }}
          title="Mute"
        />
        <Button
          onPress={() => {
            this.player.unmute();
          }}
          title="Unmute"
        />
      </View>
    );
  }
}
