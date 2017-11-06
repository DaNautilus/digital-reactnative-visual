import React from 'react';
import { View } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { H1, H2, P, Label, Hint } from '../atoms/Typography';
import Card from '../atoms/Card';
import Button from '../atoms/Button';
import { Page } from '../atoms/Layout';

import Snack from './Snack';

class ControlledSnack extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ position: 'absolute', left: 0, right: 0, top: 0 }}>
        <Snack ref={(c) => { this.snack = c; }} error message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget ornare elit."></Snack>
        <View style={{ position: 'absolute', left: 0, right: 0, top: 100 }}>
          <Button onPress={() => this.snack.show()} primary block>Open</Button>
          <Button onPress={() => this.snack.hide()} primary block>Close</Button>
        </View>
      </View>
    )
  }

}


storiesOf('Snack', module)
  .add('Sample', () =>
    <View style={{ flex: 1 }}>
      <Page>
        <Card style={{ marginHorizontal: 10 }}>
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
      </Page>
      <ControlledSnack />
    </View>
  );
