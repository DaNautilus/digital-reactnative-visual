import React, { Component } from 'react';

import { View, Animated, Easing } from 'react-native';
import Icon from './Icon';

import styles from './QRCode.style.js';

export default class QRCodeScannerOverlay extends Component {
  constructor(props) {
    super(props);

    this.animateValue = new Animated.Value(0);
    this.animate = this.animate.bind(this);
  }

  componentDidMount() {
    this.animate();
  }

  animate() {
    const rev = this.animateValue.__getValue() === 1;
    this.animateValue.setValue(rev ? 1 : 0);
    Animated.timing(this.animateValue, {
      toValue: rev ? 0 : 1,
      duration: 500,
      easing: Easing.linear,
    }).start(() => this.animate());
  }

  render() {
    const {
      style,
      dimensions: { height },
      found,
    } = this.props;

    const rHA = this.animateValue.interpolate({
      inputRange: [0, 1],
      outputRange: [height * 0.5, height * 0.55],
    });

    const riH = height * 0.1;

    return (
      <View
        style={[styles.rectangleContainer, found ? styles.rectangleContainerFound : null, style]}
      >
        <Animated.View
          style={[
            styles.rectangle,
            found ? styles.rectangleFound : null,
            { width: rHA, height: rHA },
          ]}
        >
          <View
            style={[
              styles.rectangleInner,
              !found ? null : styles.rectangleInnerFound,
              { width: riH, height: riH, top: 0, left: 0, borderTopWidth: 2, borderLeftWidth: 2 },
            ]}
          />
          <View
            style={[
              styles.rectangleInner,
              !found ? null : styles.rectangleInnerFound,
              { width: riH, height: riH, top: 0, right: 0, borderTopWidth: 2, borderRightWidth: 2 },
            ]}
          />
          <View
            style={[
              styles.rectangleInner,
              !found ? null : styles.rectangleInnerFound,
              {
                width: riH,
                height: riH,
                bottom: 0,
                left: 0,
                borderBottomWidth: 2,
                borderLeftWidth: 2,
              },
            ]}
          />
          <View
            style={[
              styles.rectangleInner,
              !found ? null : styles.rectangleInnerFound,
              {
                width: riH,
                height: riH,
                bottom: 0,
                right: 0,
                borderBottomWidth: 2,
                borderRightWidth: 2,
              },
            ]}
          />
          {found && <Icon name="14031" success xlarge />}
        </Animated.View>
      </View>
    );
  }
}
