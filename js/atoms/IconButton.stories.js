import React from 'react';
import { View } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

import IconButton from './IconButton';
import Card from './Card';
import { Page } from './Layout';

storiesOf('IconButton', module)
  .addDecorator(getStory => (
    <Page>
      <Card style={{ marginTop: 20 }}>{getStory()}</Card>
    </Page>
  ))
  .add('samples', () => (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <IconButton icon="17016" onPress={action('clicked-text')}>
        text&icon
      </IconButton>
      <IconButton icon="17021" onPress={action('clicked-text')}>
        text & icon
      </IconButton>
      <IconButton icon="06022" primary onPress={action('clicked-text')}>
        text & icon
      </IconButton>
      <IconButton icon="21001" disabled onPress={action('clicked-text')}>
        text&icon&tolongforeverything
      </IconButton>
    </View>
  ));
