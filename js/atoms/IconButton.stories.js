import React from 'react';
import { View } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import IconButton from './IconButton';
import Card from './Card';
import Page from './Page';

storiesOf('IconButton', module)
  .addDecorator(getStory =>
    <Page>
      <Card>
        {getStory()}
      </Card>
    </Page>
  )
  .add('samples', () => (
    <View style={{ flex: 1, justifyContent: 'space-around', height: 200 }}>
      <View style={{ alignSelf: 'stretch', flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
        <IconButton icon="icon-news" onPress={action('clicked-text')}>text&icon</IconButton>
        <IconButton icon="icon-badge" onPress={action('clicked-text')}>text & icon</IconButton>
        <IconButton icon="icon-admin" primary onPress={action('clicked-text')}>text & icon</IconButton>
        <IconButton icon="icon-door" disabled onPress={action('clicked-text')}>text&icon&tolongforeverything</IconButton>
      </View>
    </View>
  ));
