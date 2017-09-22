import React, { Component } from 'react';
import { View } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import QRCodeOverlay from './QRCodeOverlay';
import QRCode from './QRCode';
import Card from './Card';
import Page from './Page';

import * as colors from '../colors';

storiesOf('QRCode', module)
  // .addDecorator(getStory => (
  //   <Page>{getStory()}</Page>
  // ))
  .add('overlay', () => (
    <Page>
      <View style={{ marginTop: 120, flex: 1 }}>
        <QRCodeOverlay dimensions={{ height: 300 }} />
      </View>
    </Page>
  ))
  .add('sample', () => (
    <View style={{ height: 250 }}>
      <QRCode onSuccess={(code) => { action('scanned')() }} cameraSide='front' />
    </View>
  ));
