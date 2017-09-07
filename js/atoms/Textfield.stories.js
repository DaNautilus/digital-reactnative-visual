import React from 'react';
import { View } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Textfield from './Textfield';
import { H1, H2, P, Label, Hint } from './Typography';
import Card from './Card';
import Page from './Page';
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
      <View style={{ flex: 1, justifyContent: 'flex-start', backgroundColor: colors.backgroundGray, padding: 10, paddingTop: 0 }}>
        <Textfield icon="icon-search" placeholder="search" noBorder />
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
