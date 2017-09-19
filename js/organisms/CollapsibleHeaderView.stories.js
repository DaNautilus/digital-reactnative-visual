import React from 'react';
import { View } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Sample3 from './Sample3';
import Sample1 from './Sample1';
import Sample2 from './Sample2';
import Sample4 from './Sample4';
import Sample5 from './Sample5';
import Sample6 from './Sample6';
import * as colors from '../colors';
import Page from '../atoms/Page';
import Card from '../atoms/Card';
import List from '../atoms/List';
import { H1, H2, P, Label, Hint } from '../atoms/Typography';

import { getData, persons } from '../atoms/List.stories.js';

storiesOf('CollapsibleHeaderView', module)
  .addDecorator(getStory =>
    <View style={{ flex: 1 }}>
      <View style={{ height: 60, backgroundColor: '#003594' }} />
      <View style={{ flex: 1, backgroundColor: '#ededeb'}}>
        {getStory()}
      </View>
    </View>
  )
  .add('samples', () => (
    <Sample1 />

  ))
  .add('samples 2', () => (
    <Sample2 />

  ))
  .add('samples 3', () => (
    <Sample3 />

  ))
  .add('samples 4', () => (
    <Sample4
      src="https://avatars2.githubusercontent.com/u/977772"
      border="success"
    >
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
    </Sample4>
  ))
  .add('samples 5', () => (
    <Sample5
      src="https://avatars2.githubusercontent.com/u/977772"
      border="success"
      withSections
      keyExtractor={(item, index) => item._id}
      data={getData(persons)}
      renderItem={({ item }) => {
        return (
          <List.Item
            onPress={action('clicked-item')}
            success={item.firstname.charAt(0) === "J"}
            warning={item.firstname.charAt(0) === "L"}
            title={`${item.firstname} ${item.lastname}`}
            text="lorem ipsum dolores opsi quantum oretasi."
            icon="icon-badge"
            rightIcon="icon-profile"
          />
        );
      }}
    >
    </Sample5>
  ))
  .add('samples 6', () => (
    <Sample6
      src="https://avatars2.githubusercontent.com/u/977772"
      border="success"
      withSections
      keyExtractor={(item, index) => item._id}
      data={getData(persons)}
      renderItem={({ item }) => {
        return (
          <List.Item
            onPress={action('clicked-item')}
            success={item.firstname.charAt(0) === "J"}
            warning={item.firstname.charAt(0) === "L"}
            title={`${item.firstname} ${item.lastname}`}
            text="lorem ipsum dolores opsi quantum oretasi."
            icon="icon-badge"
            rightIcon="icon-profile"
          />
        );
      }}
    >
    </Sample6>
  ));
