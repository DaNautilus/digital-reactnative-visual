import React from 'react';
import { Text as RText } from 'react-native';

import { getColor } from '../utils/colors';
import * as vars from '../vars';

export function Text({ size = 16, marginBottom = false, marginTop = false, bold, children, style = {}, ...props }) {

  const color = getColor(props);
  const baseStyle = {
    fontFamily: bold ? vars.sansserif.semibold : vars.sansserif.light,
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
