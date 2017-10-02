import React, { Component } from 'react';
import {
  Animated,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Avatar from '../atoms/Avatar';
const AnimatedAvatar = Animated.createAnimatedComponent(Avatar);

import * as colors from '../colors';

const HEADER_MAX_HEIGHT = 104;
const HEADER_MIN_HEIGHT = 0;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollY: new Animated.Value(0),
    };
  }

  render() {
    const { children, ...rest } = this.props;

    const avatarScale = this.state.scrollY.interpolate({
      inputRange: [-10, 0, HEADER_SCROLL_DISTANCE / 2],
      outputRange: [1.25, 1, 0],
      //extrapolate: 'clamp',
    });
    const avatarOpacity = this.state.scrollY.interpolate({
      inputRange: [0, 10, (HEADER_SCROLL_DISTANCE / 10) * 3],
      outputRange: [1, 1, 0],
      extrapolate: 'clamp',
    });
    const avatarTranslate = this.state.scrollY.interpolate({
      inputRange: [-10, 0, 1, HEADER_SCROLL_DISTANCE / 4, HEADER_SCROLL_DISTANCE],
      outputRange: [5, 0, 0, -30, -54],
      //extrapolate: 'clamp',
    });

    const bgTranslate = this.state.scrollY.interpolate({
      inputRange: [0, 49, HEADER_SCROLL_DISTANCE],
      outputRange: [0, 0, -54],
      extrapolate: 'clamp',
    });
    const bgScale = this.state.scrollY.interpolate({
      inputRange: [-10, 0, HEADER_SCROLL_DISTANCE],
      outputRange: [1.2, 1, 1],
      //extrapolate: 'clamp',
    });

    return (
      <View style={styles.fill}>
        <StatusBar
          translucent
          barStyle="light-content"
          backgroundColor="rgba(0, 0, 0, 0.251)"
        />
        <Animated.ScrollView
          style={styles.fill}
          scrollEventThrottle={1}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
            { useNativeDriver: true },
          )}
        >

          <View style={styles.scrollViewContent}>
            {children}
          </View>

        </Animated.ScrollView>

        <View
          style={[
            styles.bar
          ]}
        >
          <Animated.View
            style={[
              styles.bluebar,
              {
                transform: [
                  { translateY: bgTranslate },
                  { scale: bgScale }
                ],
              },
            ]}
          />
          <AnimatedAvatar
            circle
            xlarge
            {...rest}
            style={{
              opacity: avatarOpacity,
              transform: [
                { translateY: avatarTranslate },
                { scale: avatarScale }
              ],
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  fill: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  content: {
    flex: 1,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#03A9F4',
    overflow: 'hidden',
    height: HEADER_MAX_HEIGHT,
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: null,
    height: HEADER_MAX_HEIGHT,
    resizeMode: 'cover',
  },
  bluebar: {
    backgroundColor: colors.blue,
    marginTop: 0,
    height: 54,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  bar: {
    backgroundColor: 'transparent',
    marginTop: 0,
    height: 103,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  title: {
    color: 'white',
    fontSize: 18,
  },
  scrollViewContent: {
    marginTop: HEADER_MAX_HEIGHT,
    paddingTop: 10
  },
  row: {
    height: 40,
    margin: 16,
    backgroundColor: '#D3D3D3',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
