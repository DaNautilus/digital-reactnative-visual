import React from 'react';
import { View, Platform } from 'react-native';
import ModalPicker from 'react-native-modal-selector';
import { Text, Label } from './Typography';
import Icon from './Icon';

import styles from './Textfield.style.js';
import { visualProvided } from './VisualProvider';

import * as colors from '../colors';

class Select extends React.Component {
  render() {
    const {
      data,
      onChange,
      placeholder,
      value,
      label,
      bold,
      info,
      success,
      warning,
      error,
      noMargin,
      style,
      disabled,
      offlineAware,
      offline,
    } = this.props;

    let borderColor = colors.borderGray;
    // if (focus) borderBottomColor = colors.blue;
    if (error) borderColor = colors.red;
    const additionalContainerStyle = {
      borderColor,
    };

    const additionalTextfieldStyle = {
      // marginTop: label ? 4 : 0,
      paddingTop: Platform.OS === 'ios' ? 0 : 6,
    };

    const labelText = `${label}${error && typeof error === 'string' ? ` ${error}` : ''}`;

    const showValue = value && data && data.length ? data.find(d => d.key === value) : '';

    if (disabled || (offlineAware && offline))
      return (
        <View style={[{ marginTop: noMargin ? 0 : 10 }, style]}>
          {label && <Label {...{ bold, info, success, warning, error }}>{labelText}</Label>}
          <View style={[styles.container, additionalContainerStyle]}>
            <Text placeholder={!value} style={[styles.textfield, additionalTextfieldStyle]}>
              {showValue.label || placeholder}
            </Text>
            <Icon
              name="140224"
              info
              style={{ position: 'absolute', right: 5, top: Platform.OS === 'ios' ? 4 : 12 }}
              disabled
            />
          </View>
        </View>
      );

    return (
      <ModalPicker data={data} onChange={onChange}>
        <View style={[{ marginTop: noMargin ? 0 : 10 }, style]}>
          {label && <Label {...{ bold, info, success, warning, error }}>{labelText}</Label>}
          <View style={[styles.container, additionalContainerStyle]}>
            <Text placeholder={!value} style={[styles.textfield, additionalTextfieldStyle]}>
              {showValue.label || placeholder}
            </Text>
            <Icon
              name="140224"
              info
              style={{ position: 'absolute', right: 5, top: Platform.OS === 'ios' ? 4 : 12 }}
            />
          </View>
        </View>
      </ModalPicker>
    );
  }
}

export default visualProvided(Select);
