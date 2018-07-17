import React, { Component } from 'react';
import { Animated } from 'react-native';

import Notification from '../atoms/Notification';
import { getColor } from '../utils/colors';

export default class Snack extends Component {
  constructor(props) {
    super(props);

    this.state = {
      translateValue: new Animated.Value(0),
      height: 400,
    };

    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
    this.handleOnLayout = this.handleOnLayout.bind(this);
  }

  show() {
    const { translateValue } = this.state;
    Animated.spring(translateValue, {
      friction: 4,
      tension: 30,
      toValue: 1,
      // useNativeDriver: true
    }).start();
  }

  hide() {
    const { translateValue } = this.state;
    Animated.spring(translateValue, {
      friction: 5,
      tension: 0,
      toValue: 0,
      // useNativeDriver: true
    }).start();
  }

  handleOnLayout(e) {
    this.setState({ height: e.nativeEvent.layout.height });
  }

  render() {
    const { message, ...rest } = this.props;
    const { height, translateValue } = this.state;

    const finalColor = getColor(this.props);

    const translateY = translateValue.interpolate({
      inputRange: [0, 1],
      outputRange: [height * -2, 0],
    });
    //
    // const riH = height * 0.1;

    return (
      <Animated.View
        onLayout={this.handleOnLayout}
        style={[
          {
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            backgroundColor: finalColor,
            paddingTop: 15,
          },
          {
            transform: [{ translateY }],
          },
        ]}
      >
        <Notification {...rest}>{message}</Notification>
      </Animated.View>
    );
  }
}
