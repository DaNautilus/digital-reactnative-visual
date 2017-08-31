import React from 'react';
import { View } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { H1, H2, P, Label, Hint } from './Typography';
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
      <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget ornare elit. Praesent et turpis dictum, imperdiet enim non, pulvinar enim.</P>
      <Label>Label Username:</Label>
      <P>jamuhl (Jan Mühlemann)</P>
      <Label info>Label Username:</Label>
      <P>jamuhl (Jan Mühlemann)</P>
      <Label success>Label Username:</Label>
      <P>jamuhl (Jan Mühlemann)</P>
      <Label warning>Label Username:</Label>
      <P>jamuhl (Jan Mühlemann)</P>
      <Label error>Label Username:</Label>
      <P>jamuhl (Jan Mühlemann)</P>
      <Hint>Hint Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget ornare elit. Praesent et turpis dictum, imperdiet enim non, pulvinar enim.</Hint>
      <Label small dark>Label Small for tabs (dark),...</Label>
      <Label small>Label Small (light),...</Label>
    </View>
  );
