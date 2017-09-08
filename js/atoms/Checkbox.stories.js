import React from 'react';
import { Text, View } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Checkbox from './Checkbox';
import * as colors from '../colors';
import Card from './Card';
import Page from './Page';

storiesOf('Checkbox', module)
  .addDecorator(getStory =>
    <Page>
      <Card>
        {getStory()}
      </Card>
    </Page>
  )
  .add('samples', () => (
    <View style={{ flex: 1, justifyContent: 'space-around' }}>
      <View style={{ alignSelf: 'stretch', flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
        <Checkbox onPress={action('clicked-text')} label='halleluja' />
        <Checkbox onPress={action('clicked-text')} checked label='halleluja' />
      </View>
      <View style={{ alignSelf: 'stretch', flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
        <Checkbox asRadio onPress={action('clicked-text')} label='halleluja' />
        <Checkbox asRadio onPress={action('clicked-text')} checked label='halleluja' />
      </View>
    </View>
  ));
