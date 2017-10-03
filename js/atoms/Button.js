import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text as RText, TouchableOpacity, View } from 'react-native';
import { Text } from './Typography';
import Icon from './Icon';
import { coalesceNonElementChildren } from '../utils';
import styles from './Button.style.js';
import { visualProvided } from './VisualProvider';

import { getColor } from '../utils/colors';
import * as colors from '../colors'

const systemButtonOpacity = 0.6;

export class PrimitiveButton extends Component {
  render() {
    const { block, icon, foreColor, backgroundColor, borderColor, marginRight, marginLeft } = this.props;

    const touchableProps = {
      activeOpacity: this._computeActiveOpacity(),
    };

    const style = [
      styles.container,
      backgroundColor ? { backgroundColor } : null,
      borderColor ? { borderColor, borderWidth: 1 } : null,
      !block ? styles.containerMinWidth : null,
      marginLeft ? { marginLeft: 10 } : 0,
      marginRight ? { marginRight: 10 } : 0,
      this.props.containerStyle
    ];

    // const shadowStyle = [
    //   primary && !disabled ? styles.withoutShadow : null,
    //   (primary || secondary || tertiary) ? styles.withoutShadow : null,
    //   asIconButton ? styles.shadowIconButton : null
    // ];

    if (!this.props.disabled) {
      touchableProps.onPress = this.props.onPress;
      touchableProps.onPressIn = this.props.onPressIn;
      touchableProps.onPressOut = this.props.onPressOut;
      touchableProps.onLongPress = this.props.onLongPress;
    }

    return (
      <TouchableOpacity
        {...touchableProps}
        testID={this.props.testID}
        style={style}
        accessibilityTraits="button"
        accessibilityComponentType="button"
      >
        <View style={[/*shadowStyle,*/ this.props.style]}>
          {this._renderChildren()}
        </View>
      </TouchableOpacity>
    );
  }

  _renderChildren() {
    const { icon, foreColor, block, disabled, iconSize } = this.props;

    const iconContainerStyle = {
      flex: 0,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      maxWidth: block ? null : 110
    };

    const iconStyle = {
      marginRight: 6,
      marginBottom: 1
    };

    if (icon) {
      return (
        <View style={[iconContainerStyle, this.props.iconContainerStyle]}>
          <Icon size={iconSize} name={icon} color={foreColor} disabled={disabled} style={[iconStyle, this.props.iconStyle]}/>
          {this._renderGroupedChildren()}
        </View>
      )
    }
    return this._renderGroupedChildren();
  }

  _renderGroupedChildren() {
    let { disabled, foreColor, numberOfLines, textStyle, textContainerStyle } = this.props;
    let style = [
      styles.text,
      foreColor ? { color: foreColor } : null,
      this.props.style
    ];

    const childs = this.props.text ? [this.props.text] : this.props.children;

    let children = coalesceNonElementChildren(childs, (children, index) => {
      return (
        <Text key={index} style={[style, textStyle]} numberOfLines={numberOfLines || 1} ellipsizeMode={'tail'}>
          { children.map(c => typeof c === 'string' ? c.toUpperCase() : c) }
        </Text>
      );
    });

    switch (children.length) {
      case 0:
        return null;
      case 1:
        return <View style={[styles.group, textContainerStyle]}>{children[0]}</View>;
      default:
        return <View style={[styles.group, textContainerStyle]}>{children}</View>;
    }
  }

  _computeActiveOpacity() {
    if (this.props.disabled) {
      return 1;
    }
    return this.props.activeOpacity != null ?
      this.props.activeOpacity :
      systemButtonOpacity;
  }
};


class Button extends Component {
  render() {
    const { icon, primary, secondary, tertiary, block, disabled, marginRight, marginLeft, offlineAware, isOffline } = this.props;

    const finalDisabled = disabled || offlineAware && isOffline();

    const backgroundColor = getColor({
      info: primary && !finalDisabled,
      lightGray: secondary && !finalDisabled
    }, finalDisabled && (primary || secondary || tertiary) ? colors.lightGray : colors.white)

    const foreColor = getColor({
      info: !primary && !secondary && !tertiary && !finalDisabled,
      white: primary && !finalDisabled
    }, finalDisabled ? colors.borderGray : colors.textGray)

    const borderColor = getColor({
      info: primary && !finalDisabled,
      lightGray: secondary && !finalDisabled,
      borderGray: tertiary && !finalDisabled
    }, finalDisabled && (primary || secondary || tertiary) ? colors.lightGray : colors.white)

    return <PrimitiveButton
      backgroundColor={backgroundColor}
      foreColor={foreColor}
      borderColor={borderColor}
      {...this.props}
    />

  }


};

const Extended = visualProvided(Button);
export default Extended;
