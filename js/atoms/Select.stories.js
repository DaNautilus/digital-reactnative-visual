import React, { Component } from 'react';

import { storiesOf } from '@storybook/react-native';

import Select from './Select';
import Card from './Card';
import { Page } from './Layout';

let index = 0;
/* eslint-disable no-plusplus */
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
  { key: index++, label: 'Ginger' },
];
/* eslint-enable no-plusplus */

class Sample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(option) {
    this.setState({ value: option.key });
  }

  render() {
    const { value } = this.state;
    return (
      <Select
        data={data}
        label="fruit"
        placeholder="select some food"
        value={value}
        onChange={this.onChange}
      />
    );
  }
}

storiesOf('Select', module)
  .addDecorator(getStory => (
    <Page>
      <Card>{getStory()}</Card>
    </Page>
  ))
  .add('sample', () => <Sample />);
