import React from 'react';
import { View } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

import Button from './Button';
import Card from './Card';
import { Page } from './Layout';

storiesOf('Button', module)
  .addDecorator(getStory => (
    <Page>
      <Card>{getStory()}</Card>
    </Page>
  ))
  .add('samples', () => (
    <View style={{ flex: 1, justifyContent: 'space-around', height: 1200 }}>
      <View
        style={{
          alignSelf: 'stretch',
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}
      >
        <Button onPress={action('clicked-text')}>Text Button</Button>
        <Button disabled onPress={action('clicked-text')}>
          Text Button
        </Button>
      </View>
      <View
        style={{
          alignSelf: 'stretch',
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}
      >
        <Button primary onPress={action('clicked-text')}>
          Primary with text overflow
        </Button>
        <Button primary disabled onPress={action('clicked-text')}>
          Primary
        </Button>
      </View>
      <View
        style={{
          alignSelf: 'stretch',
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}
      >
        <Button secondary onPress={action('clicked-text')}>
          Secondary
        </Button>
        <Button secondary disabled onPress={action('clicked-text')}>
          Secondary
        </Button>
      </View>
      <View
        style={{
          alignSelf: 'stretch',
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}
      >
        <Button tertiary onPress={action('clicked-text')}>
          Tertiary
        </Button>
        <Button tertiary disabled onPress={action('clicked-text')}>
          Tertiary
        </Button>
      </View>
      <View
        style={{
          alignSelf: 'stretch',
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}
      >
        <Button icon="icon-news" onPress={action('clicked-text')}>
          text&icon
        </Button>
        <Button icon="icon-news" disabled onPress={action('clicked-text')}>
          text&icon
        </Button>
      </View>
      <View
        style={{
          alignSelf: 'stretch',
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}
      >
        <Button icon="icon-news" primary onPress={action('clicked-text')}>
          primary&icon
        </Button>
        <Button icon="icon-news" primary disabled onPress={action('clicked-text')}>
          primary&icon
        </Button>
      </View>
      <View
        style={{
          alignSelf: 'stretch',
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}
      >
        <Button icon="icon-news" secondary onPress={action('clicked-text')}>
          secondary&icon
        </Button>
        <Button icon="icon-news" secondary disabled onPress={action('clicked-text')}>
          secondary&icon
        </Button>
      </View>
      <View
        style={{
          alignSelf: 'stretch',
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}
      >
        <Button icon="icon-news" tertiary onPress={action('clicked-text')}>
          tertiary&icon
        </Button>
        <Button icon="icon-news" tertiary disabled onPress={action('clicked-text')}>
          tertiary&icon
        </Button>
      </View>
      <View
        style={{
          alignSelf: 'stretch',
          flex: 9,
          flexDirection: 'column',
          justifyContent: 'space-around',
        }}
      >
        <Button block onPress={action('clicked-text')}>
          la le lu
        </Button>
        <Button block primary onPress={action('clicked-text')}>
          la le lu
        </Button>
        <Button block secondary onPress={action('clicked-text')}>
          la le lu
        </Button>
        <Button block tertiary onPress={action('clicked-text')}>
          la le lu
        </Button>
        <Button block icon="icon-news" onPress={action('clicked-text')}>
          la le lu
        </Button>
        <Button block icon="icon-news" primary onPress={action('clicked-text')}>
          la le lu
        </Button>
        <Button block icon="icon-news" secondary onPress={action('clicked-text')}>
          la le lu
        </Button>
        <Button block icon="icon-news" tertiary onPress={action('clicked-text')}>
          la le lu
        </Button>
      </View>
    </View>
  ));
