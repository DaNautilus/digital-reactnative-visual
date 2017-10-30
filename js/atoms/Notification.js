import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import { Text } from './Typography';
import Icon from './Icon';

import styles from './Notification.style.js';
import * as colors from '../colors';

import { getColor } from '../utils/colors';

export default function Notification({ style, children, ...props }) {
  let finalColor = getColor(props);

  let icon = props.icon;
  if (!icon) {
    if (props.success) icon = 'icon-success';
    if (props.error) icon = 'icon-warningtriangle';
    if (props.warning) icon = 'icon-warningbubble';
    if (!icon) icon = 'icon-info';
  }

  return (
    <View style={[styles.container, { backgroundColor: finalColor }, style]}>
      <Icon white name={icon} style={{ marginRight: 5 }} />
      <Text white style={{ fontSize: 14 }}>{children}</Text>
    </View>
  );
}
