import React from 'react';
import { View } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

import AnimatedPanelList from './AnimatedPanelList';
import * as colors from '../colors';
import List from '../atoms/List';
import Textfield from '../atoms/Textfield';
import Button from '../atoms/Button';

import { getData, persons } from '../atoms/List.stories.js';

storiesOf('AnimatedPanelList', module)
  .addDecorator(getStory => (
    <View style={{ flex: 1 }}>
      <View style={{ height: 60, backgroundColor: '#003594' }} />
      <View style={{ flex: 1, backgroundColor: '#ededeb' }}>{getStory()}</View>
      <View
        style={{
          height: 60,
          backgroundColor: '#003594',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
        }}
      />
    </View>
  ))
  .add('Sample', () => (
    <AnimatedPanelList
      src="https://avatars2.githubusercontent.com/u/977772"
      border="success"
      withSections
      navbarHeight={110}
      keyExtractor={item => item._id}
      data={getData(persons)}
      panel={
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-start',
            backgroundColor: colors.backgroundGray,
            padding: 10,
            paddingTop: 0,
          }}
        >
          <Textfield icon="10002" placeholder="search" noBorder />
          <Button primary block containerStyle={{ marginTop: 10 }}>
            Add Person
          </Button>
        </View>
      }
      renderItem={({ item }) => (
        <List.Item
          onPress={action('clicked-item')}
          success={item.firstname.charAt(0) === 'J'}
          warning={item.firstname.charAt(0) === 'L'}
          title={`${item.firstname} ${item.lastname}`}
          text="lorem ipsum dolores opsi quantum oretasi."
          icon="17021"
          rightIcon="06011"
        />
      )}
    />
  ));
