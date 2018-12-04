import React from 'react';
import { View } from 'react-native';

import { Text } from './Typography';
import Icon from './Icon';

import styles from './Notification.style.js';

import { getColor } from '../utils/colors';

export default function Notification({ style, children, ...props }) {
  const finalColor = getColor(props);

  let icon = props.icon; // eslint-disable-line
  if (!icon) {
    if (props.success) icon = '14031';
    if (props.error) icon = '15002';
    if (props.warning) icon = '15001';
    if (!icon) icon = '14002';
  }

  return (
    <View style={[styles.container, { backgroundColor: finalColor }, style]}>
      <Icon white name={icon} style={{ marginRight: 5 }} />
      <Text white style={{ fontSize: 14 }}>
        {children}
      </Text>
    </View>
  );
}
