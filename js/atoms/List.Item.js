import React from 'react';

import { View, TouchableHighlight } from 'react-native';
import Avatar from './Avatar';
import Icon from './Icon';
import { Text, Hint } from './Typography';

import styles from './List.Item.style.js';
import { getColor } from '../utils/colors';
import * as colors from '../colors';

export default function ListItem({
  children,
  title,
  text,
  multiline,
  figure,
  icon,
  rightFigure,
  rightIcon,
  onPress,
  style,
  ...props
}) {
  let finalFigure = figure;
  if (!finalFigure && icon)
    finalFigure = <Avatar icon={icon} style={{ marginRight: 10 }} circle lightGray />;

  let finalRightFigure = rightFigure;
  if (!finalRightFigure && rightIcon)
    finalRightFigure = <Icon name={rightIcon} style={{ marginLeft: 10 }} />;

  const borderColor = getColor(props, colors.white);
  const additionalContainerStyle = {
    borderLeftColor: borderColor,
  };

  if (children)
    return (
      <TouchableHighlight underlayColor={colors.darkGray} onPress={onPress}>
        <View style={[styles.container, additionalContainerStyle, style]}>
          {finalFigure}
          {children}
          {finalRightFigure}
        </View>
      </TouchableHighlight>
    );

  return (
    <TouchableHighlight underlayColor={colors.darkGray} onPress={onPress}>
      <View style={[styles.container, additionalContainerStyle, style]}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ flex: 9, flexDirection: 'row', alignItems: 'center' }}>
            {finalFigure}
            <View style={{ flex: 1, flexDirection: 'column' }}>
              {title && (
                <Text
                  style={{ minHeight: 20 }}
                  ellipsizeMode="tail"
                  numberOfLines={multiline ? null : 1}
                >
                  {title}
                </Text>
              )}
              {text && (
                <Hint
                  marginBottom={false}
                  ellipsizeMode="tail"
                  numberOfLines={multiline ? null : 1}
                >
                  {text}
                </Hint>
              )}
            </View>
          </View>
          {finalRightFigure && (
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
              {finalRightFigure}
            </View>
          )}
        </View>
      </View>
    </TouchableHighlight>
  );
}
