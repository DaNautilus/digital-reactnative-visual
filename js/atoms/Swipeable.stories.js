import React from 'react';
import { View } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import List from './List';
import { Text } from './Typography';
import Page from './Page';
import Swipeable from './Swipeable';

import * as colors from '../colors';


class Example1 extends React.Component {

  state = {
    rightActionActivated: false,
    toggle: false
  };

  render() {
    const {leftActionActivated, toggle} = this.state;

    return (
      <Swipeable
        rightActionActivationDistance={100}
        rightContent={
            !leftActionActivated ?
              <Swipeable.Icon icon="icon-recyclebin" error onPress={action('clicked-button')} ></Swipeable.Icon> :
              <Swipeable.Icon icon="icon-success" success onPress={action('clicked-button')} ></Swipeable.Icon>
          }
        onRightActionActivate={() => this.setState({leftActionActivated: true})}
        onRightActionDeactivate={() => this.setState({leftActionActivated: false})}
        onRightActionComplete={() => this.setState({toggle: !toggle})}
      >
        <List.Item onPress={action('clicked-item')} icon="icon-persons">
          <Text>With Swipe action</Text>
        </List.Item>
      </Swipeable>
    );
  }
}

storiesOf('Swipeable', module)
  .addDecorator(getStory =>
    <Page>
      {getStory()}
    </Page>
  )
  .add('samples', () => (
    <View style={{ marginTop: 10 }}>
      <Swipeable
        rightButtons={[
          <Swipeable.Icon icon="icon-recyclebin" error onPress={action('clicked-button')} ></Swipeable.Icon>
        ]}
        leftButtons={[
          <Swipeable.Icon left icon="icon-admin" info onPress={action('clicked-button')} ></Swipeable.Icon>,
          <Swipeable.Icon left icon="icon-success" success onPress={action('clicked-button')} ></Swipeable.Icon>
        ]}
        // rightActionActivationDistance={140}
        // onRightActionRelease={() => { action('release-right-item')() }}
        >
        <List.Item onPress={action('clicked-item')} icon="icon-persons">
          <Text>With Buttons</Text>
        </List.Item>
      </Swipeable>
      <Example1 />
    </View>
  ));
