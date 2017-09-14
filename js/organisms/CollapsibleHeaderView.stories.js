import React from 'react';
import { View } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Sample3 from './Sample3';
import Sample1 from './Sample1';
import Sample2 from './Sample2';
import * as colors from '../colors';

storiesOf('CollapsibleHeaderView', module)
  // .addDecorator(getStory =>
  //   <Page>
  //     <Card>
  //       {getStory()}
  //     </Card>
  //   </Page>
  // )
  .add('samples', () => (
    <Sample1 />

  ))
  .add('samples 2', () => (
    <Sample2 />

  ))
  .add('samples 3', () => (
    <Sample3 />

  ));
