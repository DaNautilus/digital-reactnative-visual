import React, { Component } from 'react';

import { View, Vibration } from 'react-native';
import Camera from 'react-native-camera';
import Icon from './Icon';
import QRCodeOverlay from './QRCodeOverlay';

import styles from './QRCode.style.js';

export default class QRCodeScanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dimensions: { width: 0, height: 0}
    };

    this.onBarCodeRead = this.onBarCodeRead.bind(this);
    this.onLayout = this.onLayout.bind(this);
    this.handleFound = this.handleFound.bind(this);
  }

  // test found in simulator
  // componentDidMount () {
  //
  //   setInterval(() => {
  //     this.onBarCodeRead({ data: 'KABA:MF,I:010f06000001ee,V:1,T:A16' });
  //   }, 10000);
  // }

  handleFound(code) {
    if (this.found) return;

    this.found = true;
    this.code = code;
    this.foundAt = new Date();

    this.setState({ found: true }); // TODO: some nicer spring animation for found
    setTimeout(() => {
      this.found = false;
      this.setState({ found: false });
    }, 500);
  }

  onBarCodeRead(result) {
    const { onSuccess } = this.props;
    const { found, code, foundAt } = this;

    if (found || (code === result.data && foundAt && new Date().getTime() - foundAt.getTime() < 5000)) return;

    this.handleFound(result.data);
    Vibration.vibrate();
    onSuccess(result.data);
  }

  onLayout = event => {
    const { width, height } = event.nativeEvent.layout;
    if (height === this.state.dimensions.height) return;
    this.setState({ dimensions: { width, height } });
  }

  render() {
    const { cameraSide } = this.props;
    const { dimensions, found } = this.state;

    return (
      <View onLayout={this.onLayout} style={styles.camera}>
        <Camera type={cameraSide || 'front'} onBarCodeRead={this.onBarCodeRead} style={styles.camera}>
        </Camera>
        <QRCodeOverlay dimensions={dimensions} found={found} />
      </View>
    );
  }
}

QRCodeScanner.constants = Camera.constants;
