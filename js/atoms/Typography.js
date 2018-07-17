import React from 'react';
import { Text as RText } from 'react-native';

import { getColor } from '../utils/colors';
import * as vars from '../vars';

export function Text({
  size = 16,
  marginBottom = false,
  marginTop = false,
  bold,
  children,
  style = {},
  ...props
}) {
  const color = getColor(props);
  const baseStyle = {
    fontFamily: bold ? vars.sansserif.semibold : vars.sansserif.light,
    color,
    fontSize: size,
    marginBottom: marginBottom ? 10 : 0,
    marginTop: marginTop ? 10 : 0,
  };

  return (
    <RText {...props} style={[baseStyle, style]}>
      {children}
    </RText>
  );
}

export function H1({ marginBottom = true, ...props }) {
  return <Text size={21} marginBottom={marginBottom} style={{ lineHeight: 30 }} {...props} />;
}

export function P({ marginBottom = true, ...props }) {
  return <Text marginBottom={marginBottom} style={{ lineHeight: 22 }} {...props} />;
}

export function Label({ style, small, dark = false, ...props }) {
  return <Text size={small ? 12 : 16} label={!dark} {...props} />;
}

export function Hint({ style, marginBottom = true, ...props }) {
  return <Text marginBottom={marginBottom} size={14} label {...props} />;
}
