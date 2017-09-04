import React, { PropTypes } from 'react';

import { View, TouchableHighlight } from 'react-native';
import Avatar from './Avatar';

import styles from './List.Item.style.js';
import * as colors from '../colors';

export default function ListItem({ children, figure, figureEmpty, icon, error, warning, info, success, onPress, style, ...props }) {

  let finalFigure = figure;
  if (!finalFigure && icon) finalFigure = <Avatar icon={icon} style={{ marginRight: 10 }} circle lightGray />;
  // if (!finalFigure && figureEmpty) finalFigure = small ? <div style={{ width: 22 }}> </div> : <div style={{ width: 44 }}> </div>;

  let borderColor = colors.white;
  if (info) borderColor = colors.blue;
  if (success) borderColor = colors.green;
  if (warning) borderColor = colors.orange;
  if (error) borderColor = colors.red;
  const additionalContainerStyle = {
    borderLeftColor: borderColor
  }

  return (
    <TouchableHighlight underlayColor={colors.darkGray} onPress={onPress} >
      <View style={[styles.container, additionalContainerStyle, style]}>
        {finalFigure}
        {children}
      </View>
    </TouchableHighlight>
  );
}

ListItem.propTypes = {
  children: PropTypes.node,
  figure: PropTypes.element,
  figureEmpty: PropTypes.bool,
  icon: PropTypes.string,
  onPress: PropTypes.func,
  error: PropTypes.bool,
  warning: PropTypes.bool,
  info: PropTypes.bool,
  success: PropTypes.bool
};
