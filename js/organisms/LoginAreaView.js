import React, { Component } from 'react';
import { View, Image, Animated, Easing, Dimensions } from 'react-native';
import Svg, { G, Polygon } from 'react-native-svg';

import colors from '../colors';

const shabbyWhite = '#fcfcfc';

export default class LoginAreaView extends Component {
  constructor(props) {
    super(props);

    const { width, height } = Dimensions.get('window');
    this.containerStyle = {
      minWidth: width > 450 ? 450 : width - 20,
      maxWidth: 450,
      margin: 10,
      backgroundColor: 'rgba(254, 254, 254, 0.9)',
      padding: 10,
      borderWidth: 1,
      borderColor: colors.borderGray
    };
  }

  render() {
    const { children, logo, footer, containerStyle } = this.props;
    const { width, height } = Dimensions.get('window');

    let fWidth = 400;
    let fHeight = 1000;

    // iphonex
    if (height > 800) fWidth = 300;

    const scaleX = width*1.1 / fWidth;
    const scaleY = height*1.1 / fHeight;

    let scale = scaleX > scaleY ? scaleX : scaleY;
    if (scale < 0) scale = 1;

    return (
      <View style={[{ flex: 1, flexDirection: 'row', backgroundColor: shabbyWhite }, containerStyle]}>


        <View
          style={{
            transform: [
              { translateX: scale > 1.1 ? (fWidth - (scale * fWidth) - 25) / 2 : -12 /*380*/ },
              { translateY: (scale - 1) * (fWidth / 2) /*380*/ },
              { scale /*2*/ }
            ]
          }}
        >
          {/* red bottom left */}
          <View style={{ position: 'absolute', top: 0 }}>
            <Svg height="1000" width="400">
              <G x="-10" y="370" width="400" height="300">
                <Polygon fill={shabbyWhite} points="400,300 0,0 0,300" />
                <Polygon fill={colors.red} points="400,300 0,0 0,300" />
              </G>
            </Svg>
          </View>

          {/* red bottom center */}
          <View style={{ position: 'absolute', top: 0 }}>
            <Svg height="1000" width="400">
              <G x="-10" y="370" width="400" height="300">
                <Polygon fill={shabbyWhite} points="450,300 200,-75 -50,300" />
                <Polygon fill={colors.red} points="400,300 200,0 0,300" />
              </G>
            </Svg>
          </View>

          {/* red bottom right */}
          <View style={{ position: 'absolute', top: 0 }}>
            <Svg height="1000" width="400">
              <G x="-10" y="370" width="400" height="300">
                <Polygon fill={shabbyWhite} points="400,300 400,-50 -50,300" />
                <Polygon fill={colors.red} points="400,300 400,0 0,300" />
              </G>
            </Svg>
          </View>

          {/* blue top left */}
          <View style={{ position: 'absolute', top: 0 }}>
            <Svg height="1000" width="400">
              <G x="-10" y="0" width="400" height="400">
                <Polygon fill={colors.blue} points="350,0 87,390 -400,0" />
              </G>
            </Svg>
          </View>


          {/* blue top right */}
          <View style={{ position: 'absolute', top: 0 }}>
            <Svg height="1000" width="400">
              <G x="-10" y="0" width="400" height="400">
                <Polygon fill={shabbyWhite} points="800,0 215,390 -60,0" />
                <Polygon fill={colors.blue} points="780,0 255,376 -10,0" />
              </G>
            </Svg>
          </View>
        </View>

        {/*  The overlays  */}
        <View style={{ flex: 1, alignSelf: 'center' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            {children}
          </View>
          <View style={{ position: 'absolute', top: -120, left: 0, right: 0, flexDirection: 'row', justifyContent: 'center' }}>
            {logo}
          </View>
        </View>
        <View style={{ position: 'absolute', bottom: -3, left: -1, right: -1, backgroundColor: colors.white, padding: 10, borderWidth: 1, borderColor: colors.borderGray }}>
          {footer}
        </View>
      </View>
    );
  }
}
