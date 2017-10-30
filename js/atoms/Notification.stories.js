import React from 'react';
import { View } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Notification from './Notification';
import Card from './Card';
import { Page } from './Layout';

storiesOf('Notification', module)
  .addDecorator(getStory =>
    <Page>
      <Card style={{ marginTop: 20, marginHorizontal: 10  }}>
        {getStory()}
      </Card>
    </Page>
  )
  .add('samples', () => (
    <View>
      <Notification>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget ornare elit.</Notification>
      <Notification info>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget ornare elit.</Notification>
      <Notification success>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget ornare elit.</Notification>
      <Notification warning>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget ornare elit.</Notification>
      <Notification error>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget ornare elit.</Notification>
    </View>
  ));
