import React from 'react';
import { View } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

import QRCodeOverlay from './QRCodeOverlay';
import QRCode from './QRCode';
import { Page } from './Layout';

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
      <QRCode
        onSuccess={() => {
          action('scanned')();
        }}
        cameraSide="front"
      />
    </View>
  ));
