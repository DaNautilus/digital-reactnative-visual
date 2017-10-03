import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text as RText, TouchableOpacity, View } from 'react-native';
import { Text } from './Typography';
import { PrimitiveButton } from './Button';

import { coalesceNonElementChildren } from '../utils';
import styles from './Button.style.js';
import { visualProvided } from './VisualProvider';

import { getColor } from '../utils/colors';
import * as colors from '../colors'

const systemButtonOpacity = 0.6;

class IconButton extends Component {
  render() {
    const { asIconButton, icon, primary, block, disabled, marginRight, marginLeft, offlineAware, isOffline } = this.props;

    const finalDisabled = disabled || offlineAware && isOffline();

    const foreColor = getColor({
      info: primary && !finalDisabled,
      darkGray: !primary && !finalDisabled
    }, finalDisabled ? colors.borderGray : colors.textGray)

    return <PrimitiveButton
      backgroundColor={colors.white}
      foreColor={foreColor}
      borderColor={colors.white}
      {...this.props}
      marginLeft={false}
      marginRight={false}
      block
      containerStyle={{ width: 80, height: 73, justifyContent: 'flex-start' }}
      iconContainerStyle={{ backgroundColor: 'transparent', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 5 }}
      style={{ width: 78 }}
      textContainerStyle={{ marginTop: -5, justifyContent: 'center', height: 30 }}
      textStyle={{ width: 70, fontSize: 12, lineHeight: 16 }}
      iconStyle={{ marginLeft: 5 }}
      iconSize={44}
      numberOfLines={2}
    />
  }
};

const Extended = visualProvided(IconButton);
export default Extended;
