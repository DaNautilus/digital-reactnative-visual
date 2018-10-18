import React, { Component } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Text } from './Typography';
import Icon from './Icon';
import { coalesceNonElementChildren } from '../utils';
import styles from './Button.style.js';
import { visualProvided } from './VisualProvider';

import { getColor } from '../utils/colors';
import * as colors from '../colors';

const systemButtonOpacity = 0.6;

export class PrimitiveButton extends Component {
  _computeActiveOpacity() {
    const { disabled, activeOpacity } = this.props;
    if (disabled) {
      return 1;
    }
    return activeOpacity != null ? activeOpacity : systemButtonOpacity;
  }

  _renderChildren() {
    const {
      icon,
      foreColor,
      block,
      disabled,
      iconSize,
      iconStyle,
      iconContainerStyle,
    } = this.props;

    const defaultIconContainerStyle = {
      flex: 0,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      maxWidth: block ? null : 110,
    };

    const defaultIconStyle = {
      marginRight: 6,
      marginBottom: 1,
    };

    if (icon) {
      return (
        <View style={[defaultIconContainerStyle, iconContainerStyle]}>
          <Icon
            size={iconSize}
            name={icon}
            color={foreColor}
            disabled={disabled}
            style={[defaultIconStyle, iconStyle]}
          />
          {this._renderGroupedChildren()}
        </View>
      );
    }
    return this._renderGroupedChildren();
  }

  _renderGroupedChildren() {
    const { text, foreColor, numberOfLines, textStyle, textContainerStyle } = this.props;
    const style = [styles.text, foreColor ? { color: foreColor } : null, this.props.style]; // eslint-disable-line react/destructuring-assignment

    const childs = text ? [text] : this.props.children; // eslint-disable-line react/destructuring-assignment

    const children = coalesceNonElementChildren(childs, (cldrn, index) => (
      <Text
        key={index}
        style={[style, textStyle]}
        numberOfLines={numberOfLines || 1}
        ellipsizeMode="tail"
      >
        {cldrn.map(c => (typeof c === 'string' ? c.toUpperCase() : c))}
      </Text>
    ));

    switch (children.length) {
      case 0:
        return null;
      case 1:
        return <View style={[styles.group, textContainerStyle]}>{children[0]}</View>;
      default:
        return <View style={[styles.group, textContainerStyle]}>{children}</View>;
    }
  }

  render() {
    const {
      block,
      backgroundColor,
      borderColor,
      marginRight,
      marginLeft,
      containerStyle,
      disabled,
      onPress,
      onPressIn,
      onPressOut,
      onLongPress,
      testID,
      style,
    } = this.props;

    const touchableProps = {
      activeOpacity: this._computeActiveOpacity(),
    };

    const touchableStyle = [
      styles.container,
      backgroundColor ? { backgroundColor } : null,
      borderColor ? { borderColor, borderWidth: 1 } : null,
      !block ? styles.containerMinWidth : null,
      marginLeft ? { marginLeft: 10 } : 0,
      marginRight ? { marginRight: 10 } : 0,
      containerStyle,
    ];

    if (!disabled) {
      touchableProps.onPress = onPress;
      touchableProps.onPressIn = onPressIn;
      touchableProps.onPressOut = onPressOut;
      touchableProps.onLongPress = onLongPress;
    }

    return (
      <TouchableOpacity
        {...touchableProps}
        testID={testID}
        style={touchableStyle}
        accessibilityTraits="button"
        accessibilityComponentType="button"
      >
        <View style={[style]}>{this._renderChildren()}</View>
      </TouchableOpacity>
    );
  }
}

// eslint-disable-next-line react/no-multi-comp
class Button extends Component {
  render() {
    const { primary, secondary, tertiary, disabled, offlineAware, offline } = this.props;

    const finalDisabled = disabled || (offlineAware && offline);

    const backgroundColor = getColor(
      {
        info: primary && !finalDisabled,
        lightGray: secondary && !finalDisabled,
      },
      finalDisabled && (primary || secondary || tertiary) ? colors.lightGray : colors.white
    );

    const foreColor = getColor(
      {
        info: !primary && !secondary && !tertiary && !finalDisabled,
        white: primary && !finalDisabled,
      },
      finalDisabled ? colors.borderGray : colors.textGray
    );

    const borderColor = getColor(
      {
        info: primary && !finalDisabled,
        lightGray: secondary && !finalDisabled,
        borderGray: tertiary && !finalDisabled,
      },
      finalDisabled && (primary || secondary || tertiary) ? colors.lightGray : colors.white
    );

    return (
      <PrimitiveButton
        backgroundColor={backgroundColor}
        foreColor={foreColor}
        borderColor={borderColor}
        {...this.props}
        disabled={finalDisabled}
      />
    );
  }
}

export default visualProvided(Button);
