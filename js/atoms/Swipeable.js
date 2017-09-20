import React from 'react';
import { TouchableOpacity } from 'react-native';
import Swipeable from 'react-native-swipeable';

import Icon from './Icon';

import { getColor } from '../utils/colors';

export function SwipeableIcon({ icon, onPress, left, ...props }) {
const backgroundColor = getColor(props);

return (
    <TouchableOpacity onPress={onPress} style={{
      flex: 1,
      justifyContent: 'center',
      paddingLeft: left ? 0 : 25,
      paddingRight: left ? 25 : 0,
      alignItems: left ? 'flex-end' : 'flex-start',
      backgroundColor
    }}>
      <Icon name={icon} white />
    </TouchableOpacity>
  )
}

Swipeable.Icon = SwipeableIcon;

export default Swipeable;
