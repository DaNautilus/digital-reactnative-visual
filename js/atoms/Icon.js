import React, { Component } from 'react';
import { TouchableOpacity, View } from 'react-native';

import DokaIcon from '../DokaIcon';
import * as colors from '../colors';

export default function Icon({ name, size, color, family = 'DokaIcon', small, large, xlarge, error, warning, highlight, info, success, white, gray, disabled, style }) {

  let finalSize = size || 26;
  if (!size && small) finalSize = 18;
  if (!size && large) finalSize = 44;
  if (!size && xlarge) finalSize = 66;

  let finalColor = color || colors.textGray;
  if (!color && error) finalColor = colors.red;
  if (!color && warning) finalColor = colors.orange;
  if (!color && success) finalColor = colors.green;
  if (!color && info) finalColor = colors.blue;
  if (!color && white) finalColor = colors.white;
  if (!color && gray) finalColor = colors.darkGray;
  if (disabled) finalColor = colors.borderGray;

  return <DokaIcon name={name} size={finalSize} color={finalColor} style={style} />
}
