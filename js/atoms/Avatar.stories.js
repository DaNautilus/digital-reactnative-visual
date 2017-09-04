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
        <Avatar name='Adriano Raiano' info />
        <Avatar name='Adriano Raiano' error />
        <Avatar name='Adriano Raiano' warning />
        <Avatar name='Adriano Raiano' success />
      </View>
      <View style={{ marginVertical: 10, alignSelf: 'stretch', flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
        <Avatar name='Adriano Raiano' lightGray />
        <Avatar name='Adriano Raiano' borderGray />
        <Avatar name='Adriano Raiano' labelGray />
        <Avatar name='Adriano Raiano' darkGray />
      </View>
      <View style={{ marginVertical: 10, alignSelf: 'stretch', flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
        <Avatar name='Adriano Raiano' info circle />
        <Avatar name='Adriano Raiano' error circle />
        <Avatar name='Adriano Raiano' warning circle />
        <Avatar name='Adriano Raiano' success circle />
      </View>
      <View style={{ marginBottom: 10, alignSelf: 'stretch', flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
        <Avatar name='Adriano Raiano' lightGray circle />
        <Avatar name='Adriano Raiano' borderGray circle />
        <Avatar name='Adriano Raiano' labelGray circle />
        <Avatar name='Adriano Raiano' darkGray circle />
      </View>
      <View style={{ marginVertical: 10, alignSelf: 'stretch', flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
        <Avatar icon="icon-news" info circle />
        <Avatar icon="icon-news" error circle />
        <Avatar icon="icon-news" warning circle />
        <Avatar icon="icon-news" success circle />
      </View>
      <View style={{ marginBottom: 10, alignSelf: 'stretch', flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
        <Avatar icon="icon-news" lightGray circle />
        <Avatar icon="icon-news" borderGray circle />
        <Avatar icon="icon-news" labelGray circle />
        <Avatar icon="icon-news" darkGray circle />
      </View>
      <View style={{ marginVertical: 10, alignSelf: 'stretch', flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
        <Avatar name='Adriano Raiano' />
        <Avatar name='Adriano Raiano' circle />
      </View>
      <View style={{ marginBottom: 10, alignSelf: 'stretch', flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
        <Avatar name='Jasper Woudenberg' small />
        <Avatar name='Jasper Woudenberg' small circle />
      </View>
      <View style={{ marginBottom: 10, alignSelf: 'stretch', flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
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
      <View style={{ marginVertical: 10, alignSelf: 'stretch', flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
        <Avatar src="https://avatars2.fail.githubusercontent.com/u/977772" name='Jan Mühlemann' />
      </View>
      <View style={{ marginBottom: 10, alignSelf: 'stretch', flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
        <Avatar src="https://avatars2.githubusercontent.com/u/977772" border="info"/>
        <Avatar src="https://avatars2.githubusercontent.com/u/977772" circle border="error" />
        <Avatar src="https://avatars2.githubusercontent.com/u/977772" small border="warning" />
        <Avatar src="https://avatars2.githubusercontent.com/u/977772" circle small border="success" />
        <Avatar src="https://avatars2.githubusercontent.com/u/977772" xsmall border="success" />
        <Avatar src="https://avatars2.githubusercontent.com/u/977772" circle xsmall border="success" />
      </View>
      <View style={{ marginBottom: 10, alignSelf: 'stretch', flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
        <Avatar icon="icon-news" lightGray circle border="info" />
        <Avatar icon="icon-news" borderGray circle border="error" />
        <Avatar icon="icon-news" labelGray circle border="warning" />
        <Avatar icon="icon-news" darkGray circle border="success" />
      </View>
      <View style={{ marginVertical: 10, alignSelf: 'stretch', flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
        <Avatar name='Adriano Raiano'  border="info" />
        <Avatar name='Adriano Raiano' circle border="error"  />
        <Avatar name='Jasper Woudenberg' small border="warning"  />
        <Avatar name='Jasper Woudenberg' small circle border="success"  />
        <Avatar name='Jan Mühlemann' xsmall border="success"  />
        <Avatar name='Jan Mühlemann' xsmall circle border="success"  />
      </View>
      <View style={{ marginVertical: 10, alignSelf: 'stretch', flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
        <Avatar src="https://avatars2.githubusercontent.com/u/977772" name='Jan Mühlemann' xlarge border="success" />
        <Avatar src="https://avatars2.githubusercontent.com/u/977772" name='Jan Mühlemann' xlarge circle border="success" />
        <Avatar src="https://avatars2.githubusercontent.com/u/977772" name='Jan Mühlemann' large border="success" />
        <Avatar src="https://avatars2.githubusercontent.com/u/977772" name='Jan Mühlemann' large circle border="success" />
      </View>
    </View>
  ));
