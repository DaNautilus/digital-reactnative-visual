import React from 'react';
import { View } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import AnimatedPanelList from './AnimatedPanelList';
import * as colors from '../colors';
import Page from '../atoms/Page';
import Card from '../atoms/Card';
import List from '../atoms/List';
import Textfield from '../atoms/Textfield';
import Button from '../atoms/Button';
import { H1, H2, P, Label, Hint } from '../atoms/Typography';

import { getData, persons } from '../atoms/List.stories.js';

storiesOf('AnimatedPanelList', module)
  .addDecorator(getStory =>
    <View style={{ flex: 1 }}>
      <View style={{ height: 60, backgroundColor: '#003594' }} />
      <View style={{ flex: 1, backgroundColor: '#ededeb'}}>
        {getStory()}
      </View>
      <View style={{ height: 60, backgroundColor: '#003594', position: 'absolute', top: 0, left: 0, right: 0 }} />
    </View>
  )
  .add('Sample', () => (
    <AnimatedPanelList
      src="https://avatars2.githubusercontent.com/u/977772"
      border="success"
      withSections
      navbarHeight={110}
      keyExtractor={(item, index) => item._id}
      data={getData(persons)}
      panel={
        <View style={{ flex: 1, justifyContent: 'flex-start', backgroundColor: colors.backgroundGray, padding: 10, paddingTop: 0 }}>
          <Textfield icon="icon-search" placeholder="search" noBorder />
          <Button primary block containerStyle={{ marginTop: 10 }}>Add Person</Button>
        </View>
      }
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
    />
  ));