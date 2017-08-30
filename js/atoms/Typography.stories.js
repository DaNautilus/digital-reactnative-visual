import React from 'react';
import { View } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { H1, H2, P } from './Typography';
import Card from './Card';
import Page from './Page';


storiesOf('Text', module)
  .addDecorator(getStory =>
    <Page>
      <Card>
        {getStory()}
      </Card>
    </Page>
  )
  .add('with visual text', () =>
    <View>
      <H1>Typography H1</H1>
      <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget ornare elit. Praesent et turpis dictum, imperdiet enim non, pulvinar enim.</P>
    </View>
  );
