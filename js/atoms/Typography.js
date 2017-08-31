import React from 'react';
import { Text as RText } from 'react-native';

import * as colors from '../colors';
import * as vars from '../vars';

export function Text({ size = 16, marginBottom = false, marginTop = false, bold, label, light, info, success, warning, error, children, style = {}, ...props }) {

  let color = colors.textGray;
  if (light) color = colors.lightGray;
  if (label) color = colors.labelGray;
  if (info) color = colors.blue;
  if (success) color = colors.green;
  if (warning) color = colors.orange;
  if (error) color = colors.red;
  const baseStyle = {
    fontFamily: bold ? vars.poppins.semibold : vars.poppins.light,
    color,
    fontSize: size,
    marginBottom: marginBottom ? 10 : 0,
    marginTop: marginTop ? 10 : 0,
  }

  return (
    <RText {...props} style={[baseStyle, style]}>{children}</RText>
  )
}

export function H1({ marginBottom = true, ...props }) {
  return <Text {...props} size={21} marginBottom={marginBottom} style={{ lineHeight: 30 }} />
}

export function P({ marginBottom = true, ...props }) {
  return <Text {...props} marginBottom={marginBottom} style={{ lineHeight: 22 }} />
}

export function Label({ style, small, dark = false, ...props }) {
  return <Text {...props} size={small ? 12 : 16} label={!dark} />
}

export function Hint({ style, marginBottom = true,  ...props }) {
  return <Text {...props} marginBottom={marginBottom} size={14} label />
}
