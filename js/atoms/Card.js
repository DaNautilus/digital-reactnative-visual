import React from 'react';
import { View } from 'react-native';

import styles from './Card.style.js';

export default function Card({ style, margin, group, transparent, children }) {
  return (
    <View
      style={[
        styles.container,
        group ? styles.group : null,
        transparent ? styles.transparent : null,
        margin ? { marginRight: 10, marginLeft: 10 } : null,
        style,
      ]}
    >
      {children}
    </View>
  );
}

export function CardActions({ style, children }) {
  return <View style={[styles.actions, style]}>{children}</View>;
}

Card.Actions = CardActions;
