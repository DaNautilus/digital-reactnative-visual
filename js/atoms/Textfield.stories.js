import React from 'react';
import { View } from 'react-native';

import { storiesOf } from '@storybook/react-native';

import Textfield from './Textfield';
import { H1 } from './Typography';
import Card from './Card';
import { Page } from './Layout';
import * as colors from '../colors';

storiesOf('Textfield', module)
  // .addDecorator(getStory =>
  //   <Page>
  //     <Card>
  //       {getStory()}
  //     </Card>
  //   </Page>
  // )
  .add('samples', () => (
    <Page>
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
      </View>
      <Card>
        <View style={{ flex: 1, justifyContent: 'flex-start' }}>
          <H1>la le lu lu</H1>
          <Textfield value="lorem ipsum" noMargin />
          <Textfield label="Firstname" placeholder="Firstname" />
          <Textfield label="Firstname" placeholder="Firstname" info />
          <Textfield label="Firstname" placeholder="Firstname" success />
          <Textfield label="Firstname" placeholder="Firstname" warning />
          <Textfield label="Firstname" placeholder="Firstname" error="must be unique" />
        </View>
      </Card>
    </Page>
  ));
