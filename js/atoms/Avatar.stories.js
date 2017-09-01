import React from 'react';
import { View } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Avatar from './Avatar';
import * as colors from '../colors';
import Card from './Card';
import Page from './Page';

storiesOf('Avatar', module)
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
        <Avatar name='Adriano Raiano' isUser />
        <Avatar name='Adriano Raiano' isUser circle />
      </View>
      <View style={{ marginVertical: 10, alignSelf: 'stretch', flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
        <Avatar name='Adriano Raiano' />
        <Avatar name='Adriano Raiano' circle />
      </View>
      <View style={{ marginVertical: 10, alignSelf: 'stretch', flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
        <Avatar name='Jasper Woudenberg' small />
        <Avatar name='Jasper Woudenberg' small circle />
      </View>
      <View style={{ marginVertical: 10, alignSelf: 'stretch', flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
        <Avatar name='Jan Mühlemann' xsmall />
        <Avatar name='Jan Mühlemann' xsmall circle />
      </View>
      <View style={{ marginVertical: 10, alignSelf: 'stretch', flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
        <Avatar src="https://avatars2.githubusercontent.com/u/977772" />
        <Avatar src="https://avatars2.githubusercontent.com/u/977772" circle />
        <Avatar src="https://avatars2.githubusercontent.com/u/977772" small />
        <Avatar src="https://avatars2.githubusercontent.com/u/977772" circle small />
        <Avatar src="https://avatars2.githubusercontent.com/u/977772" xsmall />
        <Avatar src="https://avatars2.githubusercontent.com/u/977772" circle xsmall />
      </View>
      <View style={{ alignSelf: 'stretch', flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
        <Avatar src="https://avatars2.fail.githubusercontent.com/u/977772" name='Jan Mühlemann' />
      </View>
    </View>
  ));
