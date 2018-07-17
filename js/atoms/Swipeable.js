import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Swipeable from 'react-native-swipeable';

import Icon from './Icon';
import { Text } from './Typography';

import { getColor } from '../utils/colors';

export function SwipeableIcon({ icon, onPress, left, ...props }) {
  const backgroundColor = getColor(props);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flex: 1,
        justifyContent: 'center',
        paddingLeft: left ? 0 : 25,
        paddingRight: left ? 25 : 0,
        alignItems: left ? 'flex-end' : 'flex-start',
        backgroundColor,
      }}
    >
      <Icon name={icon} white />
    </TouchableOpacity>
  );
}

export function SwipeableText({ children, onPress, left, ...props }) {
  const backgroundColor = getColor(props);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flex: 1,
        justifyContent: 'center',
        paddingLeft: left ? 0 : 12,
        paddingRight: left ? 12 : 0,
        alignItems: left ? 'flex-end' : 'flex-start',
        backgroundColor,
      }}
    >
      <View style={{ width: 75, justifyContent: 'center', flexDirection: 'row' }}>
        <Text ellipsizeMode="tail" numberOfLines={2} white style={{ fontSize: 12 }}>
          {children}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

Swipeable.Icon = SwipeableIcon;
Swipeable.Text = SwipeableText;

export default Swipeable;
