import React from 'react';
import { View, Image } from 'react-native';
import { Text } from './Typography';
import ColorHash from 'color-hash';

import styles from './Avatar.style.js';
import * as vars from '../vars';
import * as colors from '../colors';

const colorHash = new ColorHash({ saturation: [0.5, 0.65] });

export default class Avatar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      failedLoading: false
    };
  }

  render() {
    const { name = '', width = 50, isUser, src, headers = {}, circle, small, xsmall, style, editable } = this.props;
    const { failedLoading } = this.state;

    let initials = '';
    const p = name.split(' ');

    p.forEach(str => {
      const f = str.charAt(0).toUpperCase();
      if (f.match(/^[\wÀÈÌÒÙàèìòùÁÉÍÓÚÝáéíóúýÂÊÎÔÛâêîôûÃÑÕãñõÄËÏÖÜäëïöüçÇßØøÅåÆæÞþÐð]$/)) initials += f;
    });

    initials = initials.length > 3 ? initials.substring(0, 3) : initials;

    let bg = colorHash.hex(name);
    if (isUser) bg = colors.blue;

    if (!initials) initials = '...';

    let finalWidth = width;
    if (small) finalWidth = 36;
    if (xsmall) finalWidth = 32;
    const additionalContainerStyle = {
      backgroundColor: src && !failedLoading ? 'transparent' : bg,
      width: finalWidth,
      height: finalWidth,
      borderRadius: circle ? finalWidth / 2 : 0
    }
    const additionalTextStyle = {
      fontSize: (small || xsmall) ? 12 : 16,
      fontFamily: (small || xsmall) ? vars.sansserif.light : vars.sansserif.semibold
    }

    if (src && !failedLoading) {
      return (
        <View style={[styles.container, additionalContainerStyle, style]}>
          <Image
            onError={e => this.setState({ failedLoading: true })}
            style={additionalContainerStyle}
            source={{uri: src, headers}}
          />
        </View>
      );
    }

    return (
      <View style={[styles.container, additionalContainerStyle, style]}>
        <Text style={[styles.text, additionalTextStyle]}>{initials}</Text>
      </View>
    );
  }
}
