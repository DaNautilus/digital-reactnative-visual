import React, { PropTypes } from 'react';
import { View } from 'react-native';

import styles from './Card.style.js';
import * as colors from '../colors';

export default function Card({ style, group, transparent, children }) {
  return (
    <View style={[styles.container, group ? styles.group : null, transparent ? styles.transparent : null, style]}>
      {children}
    </View>
  );
}

Card.propTypes = {
  children: PropTypes.node
};

export function CardActions({style, children }) {
  return (
    <View style={[styles.actions, style]}>
      {children}
    </View>
  );
}
Card.Actions = CardActions;
