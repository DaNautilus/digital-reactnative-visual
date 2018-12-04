import React, { Component } from 'react';
import { PrimitiveButton } from './Button';

import { visualProvided } from './VisualProvider';

import { getColor } from '../utils/colors';
import * as colors from '../colors';

class IconButton extends Component {
  render() {
    const { primary, disabled, offlineAware, offline } = this.props;

    const finalDisabled = disabled || (offlineAware && offline);

    const foreColor = getColor(
      {
        info: primary && !finalDisabled,
        darkGray: !primary && !finalDisabled,
      },
      finalDisabled ? colors.borderGray : colors.textGray
    );

    return (
      <PrimitiveButton
        backgroundColor={colors.white}
        foreColor={foreColor}
        borderColor={colors.white}
        {...this.props}
        marginLeft={false}
        marginRight={false}
        block
        containerStyle={{ width: 80, height: 73, justifyContent: 'flex-start' }}
        iconContainerStyle={{
          backgroundColor: 'transparent',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 5,
        }}
        style={{ width: 78 }}
        textContainerStyle={{ marginTop: 2, justifyContent: 'center', height: 30 }}
        textStyle={{ width: 70, fontSize: 12, lineHeight: 15 }}
        iconStyle={{ marginLeft: 5 }}
        iconSize={40}
        numberOfLines={2}
      />
    );
  }
}

export default visualProvided(IconButton);
