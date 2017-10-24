import React from 'react';
import { View } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import IconButton from './IconButton';
import Card from './Card';
import { Page } from './Layout';

storiesOf('IconButton', module)
  .addDecorator(getStory =>
    <Page>
      <Card style={{ marginTop: 20 }}>
        {getStory()}
      </Card>
    </Page>
  )
  .add('samples', () => (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <IconButton icon="icon-news" onPress={action('clicked-text')}>text&icon</IconButton>
      <IconButton icon="icon-badge" onPress={action('clicked-text')}>text & icon</IconButton>
      <IconButton icon="icon-admin" primary onPress={action('clicked-text')}>text & icon</IconButton>
      <IconButton icon="icon-door" disabled onPress={action('clicked-text')}>text&icon&tolongforeverything</IconButton>
    </View>
  ));
