import React, { Component } from 'react';
import { View } from 'react-native';

import { storiesOf } from '@storybook/react-native';

import { Modal } from './Modal';
import Button from './Button';
import { Text } from './Typography';
import Card from './Card';
import { Page } from './Layout';

class Sample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  render() {
    const { open } = this.state;

    return (
      <Card style={{ marginTop: 40 }}>
        <Modal open={open}>
          <Card>
            <Text>This is a modal</Text>
            <Button primary onPress={() => this.setState({ open: false })}>
              close
            </Button>
          </Card>
        </Modal>
        <View>
          <Button primary onPress={() => this.setState({ open: true })}>
            open
          </Button>
        </View>
      </Card>
    );
  }
}

storiesOf('Modal', module)
  .addDecorator(getStory => <Page>{getStory()}</Page>)
  .add('samples', () => <Sample />);
