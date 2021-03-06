import React from 'react';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

import ImageCropper from './ImageCropper';
import Button from './Button';
import Card from './Card';
import { Page } from './Layout';

storiesOf('ImageCropper', module)
  .addDecorator(getStory => (
    <Page>
      <Card style={{ marginTop: 10 }}>{getStory()}</Card>
    </Page>
  ))
  .add('sample', () => (
    <ImageCropper onChange={action('cropped-img')}>
      <Button primary>Take image</Button>
    </ImageCropper>
  ));
