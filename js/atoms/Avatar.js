import React from 'react';
import { View, Image } from 'react-native';
import { Text } from './Typography';
import ColorHash from 'color-hash';

import styles from './Avatar.style.js';
import Icon from './Icon';
import * as vars from '../vars';
import { getColor, lightenDarkenColor } from '../utils/colors';

const colorHash = new ColorHash({ saturation: [0.5, 0.65] });

export default class Avatar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      failedLoading: false
    };
  }

  render() {
    const { name = '', width = 44, border, src, icon, headers = {}, circle, xlarge, large, small, xsmall, style, editable, ...rest } = this.props;
    const { failedLoading } = this.state;

    let initials = '';
    const p = name.split(' ');

    p.forEach(str => {
      const f = str.charAt(0).toUpperCase();
      if (f.match(/^[\wÀÈÌÒÙàèìòùÁÉÍÓÚÝáéíóúýÂÊÎÔÛâêîôûÃÑÕãñõÄËÏÖÜäëïöüçÇßØøÅåÆæÞþÐð]$/)) initials += f;
    });

    initials = initials.length > 3 ? initials.substring(0, 3) : initials;

    let bg = colorHash.hex(name);
    bg = getColor(rest, bg);

    const borderColor = getColor({ [border]: border }, bg);

    if (!initials) initials = '...';

    let finalWidth = width;
    if (xlarge) finalWidth = 96;
    if (large) finalWidth = 66;
    if (small) finalWidth = 36;
    if (xsmall) finalWidth = 26;
    //if (border) finalWidth = finalWidth - 2;
    const additionalContainerStyle = {
      backgroundColor: src && !failedLoading ? 'transparent' : bg,
      width: finalWidth,
      height: finalWidth,
      borderRadius: circle ? finalWidth / 2 : 0,
    }
    const additionalBorderStyle = {
      position: 'absolute',
      top: 0,
      left: 0,
      width: finalWidth,
      height: finalWidth,
      borderWidth: xlarge ? 4 : large ? 3 : 2,
      borderColor: borderColor,
      borderRadius: circle ? finalWidth / 2 : 0,
      opacity: src && !failedLoading ? 0.66 : 1
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
          {
            border && <View style={additionalBorderStyle} />
          }
        </View>
      );
    }

    if (icon) {
      return (
        <View style={[styles.container, additionalContainerStyle, style]}>
          <Icon name={icon} white={!rest.lightGray && !rest.borderGray} />
          {
            border && <View style={additionalBorderStyle} />
          }
        </View>
      );
    }

    return (
      <View style={[styles.container, additionalContainerStyle, style]}>
        <Text style={additionalTextStyle} white={!rest.lightGray && !rest.borderGray}>{initials}</Text>
        {
          border && <View style={additionalBorderStyle} />
        }
      </View>
    );
  }
}
