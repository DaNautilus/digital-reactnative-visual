// https://github.com/kyoyadmoon/react-native-icon-checkbox/blob/master/CheckBox.js
import React from 'react';
import { StyleSheet } from 'react-native';

import { Text } from './Typography';

import Icon from '../DokaIcon';
import * as colors from '../colors';
import * as vars from '../vars';

/* eslint-disable react/destructuring-assignment */
export default function CheckBox(props) {
  let iconName = props.checked ? props.checkedIconName : props.uncheckedIconName;
  if (props.asRadio)
    iconName = props.checked ? props.radioCheckedIconName : props.radioUncheckedIconName;
  const styles = StyleSheet.create({
    label: {
      fontSize: 16,
      color: colors.textGray,
      fontFamily: vars.sansserif.light,
      marginTop: 2,
    },
    icon: {
      marginLeft: -10,
    },
  });

  function onPress() {
    props.onPress(!props.checked);
  }

  return (
    <Icon.Button
      {...props}
      name={iconName}
      size={props.size}
      backgroundColor={props.backgroundColor}
      color={props.color}
      iconStyle={[styles.icon, props.iconStyle, props.checked && props.checkedIconStyle]}
      onPress={onPress}
      activeOpacity={props.activeOpacity}
      underlayColor={props.underlayColor}
      borderRadius={props.borderRadius}
    >
      <Text style={[styles.label, props.labelStyle]}>{props.label}</Text>
    </Icon.Button>
  );
}
/* eslint-enable react/destructuring-assignment */

CheckBox.defaultProps = {
  size: 30,
  checked: false,
  labelStyle: {},
  iconStyle: {},
  checkedIconStyle: {},
  color: colors.textGray,
  backgroundColor: 'rgba(0,0,0,0)',
  underlayColor: 'rgba(0,0,0,0)',
  activeOpacity: 1,
  borderRadius: 5,
  uncheckedIconName: '17029',
  checkedIconName: '17030',
  radioUncheckedIconName: '19017',
  radioCheckedIconName: '19018',
};
