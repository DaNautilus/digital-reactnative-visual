import React from 'react';
import { TextInput, View } from 'react-native';
import { Label } from './Typography';
import Icon from './Icon';

import styles from './Textfield.style.js';
import * as colors from '../colors';

export default class Textfield extends React.Component {
  constructor(props) {
    super(props);
    this.onBlur = this.onBlur.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.focus = this.focus.bind(this);
  }

  onBlur() {
    this.props.onBlur && this.props.onBlur(); // eslint-disable-line react/destructuring-assignment, no-unused-expressions
  }

  onFocus() {
    this.props.onFocus && this.props.onFocus(); // eslint-disable-line react/destructuring-assignment, no-unused-expressions
  }

  focus() {
    this.rinputElement.focus();
  }

  render() {
    const {
      label,
      icon,
      noBorder,
      bold,
      info,
      success,
      warning,
      error,
      noMargin,
      ...props
    } = this.props;

    let borderColor = colors.borderGray;
    if (error) borderColor = colors.red;
    const additionalContainerStyle = {
      borderColor,
      borderWidth: noBorder ? 0 : 1,
    };

    const additionalTextfieldStyle = {
      // marginTop: label ? 4 : 0
      paddingLeft: icon ? 30 : 0,
    };

    return (
      <View style={{ marginTop: noMargin ? 0 : 10 }}>
        {label &&
          error && (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Label error>{label}</Label>
              <Label error>{error}</Label>
            </View>
          )}
        {label && !error && <Label {...{ bold, info, success, warning, error }}>{label}</Label>}
        <View style={[styles.container, additionalContainerStyle]}>
          {icon && (
            <Icon name={icon} borderGray style={{ position: 'absolute', top: 5, left: 5 }} />
          )}
          <TextInput
            ref={el => {
              this.inputElement = el;
            }}
            style={[styles.textfield, additionalTextfieldStyle]}
            underlineColorAndroid="transparent"
            {...props}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            placeholderTextColor={colors.borderGray}
          />
        </View>
      </View>
    );
  }
}
