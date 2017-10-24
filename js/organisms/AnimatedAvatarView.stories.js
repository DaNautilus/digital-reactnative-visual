import React from 'react';
import { View } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import AnimatedAvatarView from './AnimatedAvatarView';
import * as colors from '../colors';
import { Page, Row, Col } from '../atoms/Layout';
import Card from '../atoms/Card';
import List from '../atoms/List';
import { H1, H2, P, Label, Hint } from '../atoms/Typography';

import { getData, persons } from '../atoms/List.stories.js';

storiesOf('AnimatedAvatarView', module)
  .addDecorator(getStory =>
    <View style={{ flex: 1 }}>
      <View style={{ height: 60, backgroundColor: '#003594' }} />
      <View style={{ flex: 1 }}>
        {getStory()}
      </View>
    </View>
  )
  .add('Sample', () => (
    <AnimatedAvatarView
      src="https://avatars2.githubusercontent.com/u/977772"
      border="success"
    >
      <Row>
        <Col>
          <Card>
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
          </Card>
          <Card>
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
          </Card>
        </Col>
      </Row>
    </AnimatedAvatarView>
  ));
