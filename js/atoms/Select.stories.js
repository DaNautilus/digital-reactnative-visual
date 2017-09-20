import React, { Component } from 'react';
import { Text, View } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Select from './Select';
import Card from './Card';
import Page from './Page';

let index = 0;
const data = [
  { key: index++, section: true, label: 'Fruits' },
  { key: index++, label: 'Red Apples' },
  { key: index++, label: 'Cherries' },
  { key: index++, label: 'Cranberries' },
  { key: index++, label: 'Pink Grapefruit' },
  { key: index++, label: 'Raspberries' },
  { key: index++, section: true, label: 'Vegetables' },
  { key: index++, label: 'Beets' },
  { key: index++, label: 'Red Peppers' },
  { key: index++, label: 'Radishes' },
  { key: index++, label: 'Radicchio' },
  { key: index++, label: 'Red Onions' },
  { key: index++, label: 'Red Potatoes' },
  { key: index++, label: 'Rhubarb' },
  { key: index++, label: 'Tomatoes' },
  { key: index++, label: 'Tomabako' },
  { key: index++, label: 'Ginger' }
];

class Sample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    }

    this.onChange = this.onChange.bind(this);
  }

  onChange(option) {
    this.setState({ value: option.key });
  }

  render() {
    const { reloading } = this.state;

    return (
      <Select data={data} label="fruit" placeholder="select some food" value={this.state.value} onChange={this.onChange} />
    );
  }
}

storiesOf('Select', module)
  .addDecorator(getStory =>
    <Page>
      <Card>
        {getStory()}
      </Card>
    </Page>
  )
  .add('sample', () => (
    <Sample />
  ));
