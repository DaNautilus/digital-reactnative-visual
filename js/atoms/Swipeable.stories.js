import React from 'react';
import { View } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

import List from './List';
import { Text } from './Typography';
import { Page } from './Layout';
import Swipeable from './Swipeable';

import * as colors from '../colors';

function Sep() {
  return <View style={{ backgroundColor: colors.borderGray, height: 1 }} />;
}

class Example1 extends React.Component {
  state = {
    rightActionActivated: false,
    toggle: false,
  };

  render() {
    const { rightActionActivated, toggle } = this.state;

    return (
      <Swipeable
        rightActionActivationDistance={100}
        rightContent={
          !rightActionActivated ? (
            <Swipeable.Icon icon="14035" error onPress={action('clicked-button')} />
          ) : (
            <Swipeable.Icon icon="14031" success onPress={action('clicked-button')} />
          )
        }
        onRightActionActivate={() => this.setState({ rightActionActivated: true })}
        onRightActionDeactivate={() => this.setState({ rightActionActivated: false })}
        onRightActionComplete={() => this.setState({ toggle: !toggle })}
      >
        <List.Item onPress={action('clicked-item')} icon="06011">
          <Text>With Swipe action</Text>
        </List.Item>
      </Swipeable>
    );
  }
}

// eslint-disable-next-line react/no-multi-comp
class Example2 extends React.Component {
  state = {
    rightActionActivated: false,
    toggle: false,
  };

  render() {
    const { rightActionActivated, toggle } = this.state;

    return (
      <Swipeable
        rightActionActivationDistance={100}
        rightContent={
          !rightActionActivated ? (
            <Swipeable.Text error onPress={action('clicked-button')}>
              Delete
            </Swipeable.Text>
          ) : (
            <Swipeable.Text success onPress={action('clicked-button')}>
              Delete on Release
            </Swipeable.Text>
          )
        }
        onRightActionActivate={() => this.setState({ rightActionActivated: true })}
        onRightActionDeactivate={() => this.setState({ rightActionActivated: false })}
        onRightActionComplete={() => this.setState({ toggle: !toggle })}
      >
        <List.Item onPress={action('clicked-item')} icon="06011">
          <Text>With Swipe action</Text>
        </List.Item>
      </Swipeable>
    );
  }
}

storiesOf('Swipeable', module)
  .addDecorator(getStory => <Page>{getStory()}</Page>)
  .add('samples', () => (
    <View style={{ marginTop: 10 }}>
      <Swipeable
        rightButtons={[<Swipeable.Icon icon="14035" error onPress={action('clicked-button')} />]}
        leftButtons={[
          <Swipeable.Icon left icon="06022" info onPress={action('clicked-button')} />,
          <Swipeable.Icon left icon="14031" success onPress={action('clicked-button')} />,
        ]}
        // rightActionActivationDistance={140}
        // onRightActionRelease={() => { action('release-right-item')() }}
      >
        <List.Item onPress={action('clicked-item')} icon="06011">
          <Text>With Buttons</Text>
        </List.Item>
      </Swipeable>
      <Sep />
      <Example1 />
      <Sep />
      <Swipeable
        leftButtonWidth={100}
        rightButtonWidth={100}
        rightButtons={[
          <Swipeable.Text error onPress={action('clicked-button')}>
            Delete
          </Swipeable.Text>,
        ]}
        leftButtons={[
          <Swipeable.Text left info onPress={action('clicked-button')}>
            Permanently closed
          </Swipeable.Text>,
          <Swipeable.Text left success onPress={action('clicked-button')}>
            Remote Open
          </Swipeable.Text>,
        ]}
        // rightActionActivationDistance={140}
        // onRightActionRelease={() => { action('release-right-item')() }}
      >
        <List.Item onPress={action('clicked-item')} icon="06011">
          <Text>With Buttons</Text>
        </List.Item>
      </Swipeable>
      <Sep />
      <Example2 />
      <Sep />
    </View>
  ));
