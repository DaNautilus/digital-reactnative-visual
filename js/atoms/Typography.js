import React from 'react';
import { Text as RText } from 'react-native';

import * as colors from '../colors';
import * as vars from '../vars';

export function Text({ size = 16, bold, label, light, info, success, warning, error, children, style = {}, ...props }) {

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
  }

  return (
    <RText {...props} style={[baseStyle, style]}>{children}</RText>
  )
}

export function H1({ ...props }) {
  return <Text {...props} size={21} style={{ lineHeight: 30, marginBottom: 10 }} />
}

export function P({ ...props }) {
  return <Text {...props} style={{ lineHeight: 22 }} />
}

export function H2({ style, ...props }) {
  return <Text {...props} size={21}  />
}

export function Label({ style, ...props }) {
  return <Text {...props} size={12}  />
}
