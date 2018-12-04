import React from 'react';
import { View } from 'react-native';

import { storiesOf } from '@storybook/react-native';

import Icon from './Icon';
import { Page } from './Layout';
import Card from './Card';
import { Label } from './Typography';

import { glyphMap } from '../DokaIcon';

const iconNames = Object.keys(glyphMap);

storiesOf('Icon', module)
  .addDecorator(getStory => (
    <Page>
      <Card>{getStory()}</Card>
    </Page>
  ))
  .add('sizes and colors', () => (
    <View style={{ flex: 1, paddingTop: 40, justifyContent: 'space-around' }}>
      <View
        style={{
          alignSelf: 'stretch',
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}
      >
        <Icon name="17016" small />
        <Icon name="17016" />
        <Icon name="17016" large />
        <Icon name="17016" xlarge />
      </View>
      <View
        style={{
          alignSelf: 'stretch',
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}
      >
        <Icon name="17016" success />
        <Icon name="17016" warning />
        <Icon name="17016" error />
        <Icon name="17016" info />
      </View>
      <View
        style={{
          alignSelf: 'stretch',
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}
      >
        <Icon name="17016" highlight />
        <Icon name="17016" gray />
        <Icon name="17016" white />
      </View>
    </View>
  ))
  .add('all', () => (
    <View style={{ flex: 1, justifyContent: 'space-around' }}>
      {iconNames.map(icon => (
        <View
          key={icon}
          style={{
            alignSelf: 'stretch',
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-start',
          }}
        >
          <Icon name={icon} style={{ marginRight: 10 }} />
          <Label>{icon}</Label>
        </View>
      ))}
    </View>
  ));
