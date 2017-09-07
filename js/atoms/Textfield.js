import React from 'react';
import { TextInput, View } from 'react-native';
import { Label } from './Typography';
import Icon from './Icon';

import styles from './Textfield.style.js';
import * as colors from '../colors';

export default class Textfield extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focus: props.autoFocus
    };

    this.onBlur = this.onBlur.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.focus = this.focus.bind(this);
  }

  onBlur() {
    this.setState({ focus: false });
    this.props.onBlur && this.props.onBlur();
  }

  onFocus() {
    this.setState({ focus: true });
    this.props.onFocus && this.props.onFocus();
  }

  focus() {
    this.refs.input.focus()
  }

  render() {
    const { label, icon, noBorder, bold, info, success, warning, error, noMargin, ...props } = this.props;
    const { focus } = this.state;

    let borderColor = colors.borderGray;
    if (error) borderColor = colors.red;
    const additionalContainerStyle = {
      borderColor,
      borderWidth: noBorder ? 0 : 1
    };

    const additionalTextfieldStyle = {
      // marginTop: label ? 4 : 0
      paddingLeft: icon ? 30 : 0
    };

    const labelText = `${label}${error && typeof error === 'string' ? ' ' + error : ''}`;

    return (
      <View style={{ marginTop: noMargin ? 0 : 10 }}>
        {
          label && error && (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <Label error>{label}</Label>
              <Label error>{error}</Label>
            </View>
          )
        }
        {
          label && !error && <Label {...{ bold, info, success, warning, error }}>{label}</Label>
        }
        <View style={[styles.container, additionalContainerStyle]}>
          {
            icon && <Icon name={icon} borderGray style={{ position: 'absolute', top: 5, left: 5 }} />
          }
          <TextInput
            ref='input'
            style={[styles.textfield, additionalTextfieldStyle]}
            underlineColorAndroid='transparent'
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
