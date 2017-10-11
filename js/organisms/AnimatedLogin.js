import React, { Component } from 'react';
import { View, Image, Animated, Easing } from 'react-native';
import Svg, { G, Polygon } from 'react-native-svg';

import colors from '../colors';

export default class AnimatedLogin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animateValue: new Animated.Value(0),
      animateValue2: new Animated.Value(0),
      animateValue3: new Animated.Value(0)
    };

    this.animate = this.animate.bind(this);
    this.interp = this.interp.bind(this);
  }

  animate() {
    const { onAnimationDone, logo, footer } = this.props;

    Animated.stagger(500, [
      Animated.spring(this.state.animateValue, {
        friction: 10,
        tension: 40,
        toValue: 1,    // return to start
        useNativeDriver: true
      }),
      Animated.spring(this.state.animateValue2, {
        friction: 20,
        tension: 40,
        //speed: 12,
        //bounciness: 8,
        toValue: 1,    // return to start
        useNativeDriver: true
      }),
      Animated.spring(this.state.animateValue3, {
        friction: 25,
        tension: 40,
        //speed: 12,
        //bounciness: 8,
        toValue: 1,    // return to start
        useNativeDriver: true
      })
    ]).start(() => { onAnimationDone() });
  }

  interp(id, value, input) {
    return this.state[id].interpolate({
      inputRange: input || [0, 1],
      outputRange: value,
    })
  }

  render() {
    const { children } = this.props;

    return (
      <View style={{ flex: 1, backgroundColor: colors.white }}>

        {/* red bottom left */}
        <Animated.View style={[
          { position: 'absolute', top: 0 },
          {
            opacity: this.interp('animateValue3', [1, 1, 0.5], [0, 0.8, 1]) ,
            transform: [
              { scale: this.interp('animateValue3', [1, 3]) },
              { translateY: this.interp('animateValue3', [0, 0, 10], [0, 0.5, 1]) },
              { translateX: this.interp('animateValue3', [0, 0, -400], [0, 0.4, 1]) }
            ]
          }
        ]}>
          <Svg height="1000" width="400">
            <G x="-10" y="370" width="400" height="300">
              <Polygon fill={colors.white} points="400,300 0,0 0,300" />
              <Polygon fill={colors.red} points="400,300 0,0 0,300" />
            </G>
          </Svg>
        </Animated.View>

        {/* red bottom center */}
        <Animated.View style={[
          { position: 'absolute', top: 0 },
          {
            opacity: this.interp('animateValue3', [1, 1, 0.5], [0, 0.8, 1]) ,
            transform: [
              { scale: this.interp('animateValue3', [1, 2]) },
              { translateY: this.interp('animateValue3', [0, 0, 400], [0, 0.4, 1]) },
              { translateX: this.interp('animateValue3', [0, 0, -10], [0, 0.3, 1]) }
            ]
          }
        ]}>
          <Svg height="1000" width="400">
            <G x="-10" y="370" width="400" height="300">
              <Polygon fill={colors.white} points="450,300 200,-75 -50,300" />
              <Polygon fill={colors.red} points="400,300 200,0 0,300" />
            </G>
          </Svg>
        </Animated.View>

        {/* red bottom right */}
        <Animated.View style={[
          { position: 'absolute', top: 0 },
          {
            opacity: this.interp('animateValue3', [1, 1, 0.5], [0, 0.8, 1]) ,
            transform: [
              { scale: this.interp('animateValue3', [1, 3]) },
              { translateY: this.interp('animateValue3', [0, 0, 10], [0, 0.4, 1]) },
              { translateX: this.interp('animateValue3', [0, 0, 400], [0, 0.3, 1]) }
            ]
          }
        ]}>
          <Svg height="1000" width="400">
            <G x="-10" y="370" width="400" height="300">
              <Polygon fill={colors.white} points="400,300 400,-50 -50,300" />
              <Polygon fill={colors.red} points="400,300 400,0 0,300" />
            </G>
          </Svg>
        </Animated.View>

        {/* blue top left */}
        <Animated.View style={[
          { position: 'absolute', top: 0 },
          {
            opacity: this.interp('animateValue2', [1, 0.5]) ,
            transform: [
              { translateY: this.interp('animateValue2', [0, -400]) },
              { translateX: this.interp('animateValue2', [0, -100]) }
            ]
          }
        ]}>
          <Svg height="1000" width="400">
            <G x="-10" y="0" width="400" height="400">
              <Polygon fill={colors.blue} points="350,0 87,390 -400,0" />
            </G>
          </Svg>
        </Animated.View>


        {/* blue top right */}
        <Animated.View style={[
          { position: 'absolute', top: 0 },
          {
            opacity: this.interp('animateValue2', [1, 1, 0.5], [0, 0.4, 1]) ,
            transform: [
              { translateY: this.interp('animateValue2', [0, 0, -400], [0, 0.4, 1]) },
              { translateX: this.interp('animateValue2', [0, 0, 150], [0, 0.4, 1]) }
            ]
          }
        ]}>
          <Svg height="1000" width="400">
            <G x="-10" y="0" width="400" height="400">
              <Polygon fill={colors.white} points="800,0 215,390 -60,0" />
              <Polygon fill={colors.blue} points="780,0 255,376 -10,0" />
            </G>
          </Svg>
        </Animated.View>


        {/*  The overlays  */}
        <Animated.View style={[
          { position: 'absolute', top: 220, left: 10, right: 10, backgroundColor: 'rgba(254, 254, 254, 0.9)', padding: 10, borderWidth: 1, borderColor: colors.borderGray },
          {
            transform: [
              { translateY: this.interp('animateValue', [0, 500]) }
            ]
          }
        ]}>
          {children}
        </Animated.View>
        <Animated.View style={[
          { position: 'absolute', bottom: -3, left: -1, right: -1, backgroundColor: colors.white, padding: 10, borderWidth: 1, borderColor: colors.borderGray },
          {
            transform: [
              { translateY: this.interp('animateValue', [0, 500]) }
            ]
          }
        ]}>
          {footer}
        </Animated.View>
        <Animated.View style={[
          { position: 'absolute', top: 100, left: 0, right: 0, flexDirection: 'row', justifyContent: 'center' },
          {
            transform: [
              { translateY: this.interp('animateValue', [0, -200]) }
            ]
          }
        ]}>
          {logo}
        </Animated.View>
      </View>
    );
  }
}
