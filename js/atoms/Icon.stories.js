import React from 'react';
import { View } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Icon from './Icon';
import Page from './Page';
import Card from './Card';
import { Label } from './Typography';

import { glyphMap } from '../DokaIcon';
const iconNames = Object.keys(glyphMap);

storiesOf('Icon', module)
  .addDecorator(getStory =>
    <Page>
      <Card>
        {getStory()}
      </Card>
    </Page>
  )
  .add('sizes and colors', () => (
    <View style={{ flex: 1, paddingTop: 40, justifyContent: 'space-around' }}>
      <View style={{ alignSelf: 'stretch', flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
        <Icon name='icon-news' small />
        <Icon name='icon-news' />
        <Icon name='icon-news' large />
        <Icon name='icon-news' xlarge />
      </View>
      <View style={{ alignSelf: 'stretch', flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
        <Icon name='icon-news' success />
        <Icon name='icon-news' warning />
        <Icon name='icon-news' error />
        <Icon name='icon-news' info />
      </View>
      <View style={{ alignSelf: 'stretch', flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
        <Icon name='icon-news' highlight />
        <Icon name='icon-news' gray />
        <Icon name='icon-news' white />
      </View>
    </View>
  ))
  .add('all', () => (
    <View style={{ flex: 1, justifyContent: 'space-around' }}>
      {
        iconNames.map((icon) => (
          <View key={icon} style={{ alignSelf: 'stretch', flex: 1, flexDirection: 'row', justifyContent: 'flex-start' }}>
            <Icon name={icon} style={{ marginRight: 10 }} />
            <Label>{icon}</Label>
          </View>
        ))
      }
    </View>
  ));
