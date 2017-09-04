import React, { Component } from 'react';
import { View } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import List from './List';
import * as colors from '../colors';
import { Text, P, Hint } from './Typography';
import Icon from './Icon';
import Avatar from './Avatar';

const persons = [
  {
    "_id": "585ba6560732f94138d71f82",
    "firstname": "Keller",
    "lastname": "Gilmore"
  },
  {
    "_id": "585ba656cf63ae1187908fce",
    "firstname": "Rosario",
    "lastname": "Whitaker"
  },
  {
    "_id": "585ba656e170fb1bae87aa64",
    "firstname": "Pugh",
    "lastname": "Olson"
  },
  {
    "_id": "585ba6565f3a256c33265906",
    "firstname": "Knight",
    "lastname": "Oliver"
  },
  {
    "_id": "585ba6569f771c5bbc89bbfc",
    "firstname": "Fanny",
    "lastname": "Mckee"
  },
  {
    "_id": "585ba656b0b15464b02f450b",
    "firstname": "Natalie",
    "lastname": "Mcfarland"
  },
  {
    "_id": "585ba6563b7d127756c2bcaf",
    "firstname": "Jenifer",
    "lastname": "Kirkland"
  },
  {
    "_id": "585ba65686e7295e16dab23f",
    "firstname": "Fitzpatrick",
    "lastname": "Young"
  },
  {
    "_id": "585ba6564b5981579e72314e",
    "firstname": "Lacy",
    "lastname": "Wooten"
  },
  {
    "_id": "585ba65602f46c87c161d3fb",
    "firstname": "Phoebe",
    "lastname": "Ellison"
  },
  {
    "_id": "585ba656c5d184d0732b7716",
    "firstname": "Isabel",
    "lastname": "Carver"
  },
  {
    "_id": "585ba656f9d0d1f05c42c71e",
    "firstname": "Francis",
    "lastname": "Strickland"
  },
  {
    "_id": "585ba6563b65d23a5185a6d0",
    "firstname": "Annabelle",
    "lastname": "Cameron"
  },
  {
    "_id": "585ba65628236444a32aa8eb",
    "firstname": "Imelda",
    "lastname": "Cabrera"
  },
  {
    "_id": "585ba656da139edccfe5c345",
    "firstname": "Garrison",
    "lastname": "Roy"
  },
  {
    "_id": "585ba656b83a9d34a779bc47",
    "firstname": "Atkinson",
    "lastname": "Greene"
  },
  {
    "_id": "585ba6562515b02fea3105ef",
    "firstname": "Macdonald",
    "lastname": "Roberson"
  },
  {
    "_id": "585ba6568c4957ba256b5d99",
    "firstname": "Mcfarland",
    "lastname": "Britt"
  },
  {
    "_id": "585ba656be82779201c1838b",
    "firstname": "Barron",
    "lastname": "Bush"
  },
  {
    "_id": "585ba656f42dbeba559d57a7",
    "firstname": "Earnestine",
    "lastname": "Bradshaw"
  },
  {
    "_id": "585ba656ca8ce42a9a815459",
    "firstname": "Pace",
    "lastname": "Hendricks"
  },
  {
    "_id": "585ba6564b9f198e83ba1f2d",
    "firstname": "Duncan",
    "lastname": "Cantu"
  },
  {
    "_id": "585ba65612d57f46736acec6",
    "firstname": "Dee",
    "lastname": "Wheeler"
  },
  {
    "_id": "585ba6562394fa69671644fa",
    "firstname": "Megan",
    "lastname": "Delaney"
  },
  {
    "_id": "585ba65693a4d21310e0c40a",
    "firstname": "Burke",
    "lastname": "Durham"
  },
  {
    "_id": "585ba656f08a7079979bb101",
    "firstname": "Bender",
    "lastname": "Vazquez"
  },
  {
    "_id": "585ba6568043db28ad1d2de0",
    "firstname": "Penelope",
    "lastname": "Mcknight"
  },
  {
    "_id": "585ba6568034e735323121df",
    "firstname": "Francisca",
    "lastname": "Frye"
  },
  {
    "_id": "585ba656f0671519fb71835c",
    "firstname": "Christensen",
    "lastname": "Patton"
  },
  {
    "_id": "585ba6569dac4ef3474e834a",
    "firstname": "Sharp",
    "lastname": "Johnston"
  },
  {
    "_id": "585ba656c781b23384fa5985",
    "firstname": "Kimberley",
    "lastname": "Park"
  },
  {
    "_id": "585ba656d0124facc0f5629c",
    "firstname": "Webster",
    "lastname": "Morrow"
  },
  {
    "_id": "585ba656a073e8585c4868f9",
    "firstname": "Madeline",
    "lastname": "Little"
  },
  {
    "_id": "585ba656a7a8e60930459969",
    "firstname": "Marsh",
    "lastname": "Mathis"
  },
  {
    "_id": "585ba656e9a9455d8ae03195",
    "firstname": "Drake",
    "lastname": "Rosa"
  },
  {
    "_id": "585ba656d4086e75c5a33192",
    "firstname": "Ware",
    "lastname": "Acosta"
  },
  {
    "_id": "585ba65632c902fd6e1df7c8",
    "firstname": "Davidson",
    "lastname": "Mueller"
  },
  {
    "_id": "585ba65636112cf225fa9b2d",
    "firstname": "Tracy",
    "lastname": "Benson"
  },
  {
    "_id": "585ba6568cd353f2e8c63c9c",
    "firstname": "Hillary",
    "lastname": "Adkins"
  },
  {
    "_id": "585ba656bfed314847f81b47",
    "firstname": "Goldie",
    "lastname": "Brown"
  },
  {
    "_id": "585ba6563d158cfbf6341ab5",
    "firstname": "Buchanan",
    "lastname": "Beasley"
  },
  {
    "_id": "585ba65699e2c1c8ed6f7344",
    "firstname": "Wanda",
    "lastname": "Marsh"
  },
  {
    "_id": "585ba656572d6fd9bc51ab7e",
    "firstname": "Pamela",
    "lastname": "Manning"
  },
  {
    "_id": "585ba656a7c08632fa69bfd1",
    "firstname": "Noel",
    "lastname": "Buckner"
  },
  {
    "_id": "585ba6565c33e03049a409b8",
    "firstname": "Amalia",
    "lastname": "Duke"
  },
  {
    "_id": "585ba656e54fd60c809d163b",
    "firstname": "Neal",
    "lastname": "Guy"
  },
  {
    "_id": "585ba6562200b3c5d8bc55de",
    "firstname": "Barker",
    "lastname": "Summers"
  },
  {
    "_id": "585ba6569723e2cb6455b13e",
    "firstname": "Charmaine",
    "lastname": "Rosales"
  },
  {
    "_id": "585ba6562085d2a16b9134d1",
    "firstname": "Eileen",
    "lastname": "Cervantes"
  },
  {
    "_id": "585ba656cf29af2ba8446f1d",
    "firstname": "Lee",
    "lastname": "Sampson"
  },
  {
    "_id": "585ba6567b4d31ba516a19c1",
    "firstname": "Sybil",
    "lastname": "Talley"
  },
  {
    "_id": "585ba656a6810d9535778a80",
    "firstname": "Beth",
    "lastname": "Mcclure"
  },
  {
    "_id": "585ba656b934ff36bf4a2263",
    "firstname": "Susan",
    "lastname": "Hopkins"
  },
  {
    "_id": "585ba6563b221d661a3b0813",
    "firstname": "Regina",
    "lastname": "Holden"
  },
  {
    "_id": "585ba656e2911c1f4b59f3f8",
    "firstname": "Natasha",
    "lastname": "Orr"
  },
  {
    "_id": "585ba6568d29107edea6ee25",
    "firstname": "Lou",
    "lastname": "Hammond"
  },
  {
    "_id": "585ba6561105a609fdf9dc99",
    "firstname": "Lynn",
    "lastname": "Pena"
  },
  {
    "_id": "585ba6562a3727bf7f119aed",
    "firstname": "Patrick",
    "lastname": "Jones"
  },
  {
    "_id": "585ba65680a9cfde7dc105b0",
    "firstname": "Brewer",
    "lastname": "Bender"
  },
  {
    "_id": "585ba65699e87110973f5d95",
    "firstname": "Mercer",
    "lastname": "Chase"
  },
  {
    "_id": "585ba656eaf95694175dda5c",
    "firstname": "Loretta",
    "lastname": "Tyson"
  }
]

function getData(persons) {
  let data = {};
  let sectionIds = [];

  persons.map((person) => {
    let section = person.lastname.charAt(0);
    if (sectionIds.indexOf(section) === -1) {
      sectionIds.push(section);
      data[section] = [];
    }
    data[section].push(person);
  });

  return { data, sectionIds: sectionIds.sort() };
}

class ReloadSample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reloading: false
    }

    this.reload = this.reload.bind(this);
  }

  reload() {
    this.setState({ reloading: true });

    setTimeout(() => this.setState({ reloading: false }), 2500);
  }

  render() {
    const { reloading } = this.state;

    return (
      <View style={{ marginTop: 20 }}>
        <List
          withSections
          onRefresh={this.reload}
          isRefreshing={reloading}
          refreshDescription="Refreshing persons"
          data={getData(persons)}
          renderRow={(rowData, sectionId, rowId) => {
            return (
              <List.Item onPress={action('clicked-item')} icon="icon-persons" success={rowData.firstname.charAt(0) === "J"} warning={rowData.firstname.charAt(0) === "L"}>
                <Text>{`${rowData.firstname} ${rowData.lastname}`}</Text>
              </List.Item>
            );
          }}
        />
      </View>
    );
  }
}

storiesOf('List', module)
  // .addDecorator(getStory => (
  //   <CenterView>{getStory()}</CenterView>
  // ))
  .add('simple', () => (
    <View style={{ marginTop: 20 }}>
      <List
        data={persons}
        renderRow={(rowData, sectionId, rowId) => {
          return (
            <List.Item onPress={action('clicked-item')} success={rowData.firstname.charAt(0) === "J"} warning={rowData.firstname.charAt(0) === "L"}>
              <Text>{`${rowData.firstname} ${rowData.lastname}`}</Text>
            </List.Item>
          );
        }}
      />
    </View>
  ))
  .add('with Sections', () => (
    <View style={{ marginTop: 20 }}>
      <List
        withSections
        data={getData(persons)}
        renderRow={(rowData, sectionId, rowId) => {
          return (
            <List.Item onPress={action('clicked-item')} icon="icon-persons" success={rowData.firstname.charAt(0) === "J"} warning={rowData.firstname.charAt(0) === "L"}>
              <Text>{`${rowData.firstname} ${rowData.lastname}`}</Text>
            </List.Item>
          );
        }}
      />
    </View>
  ))
  .add('with Sections more infos', () => (
    <View style={{ marginTop: 20 }}>
      <List
        withSections
        data={getData(persons)}
        renderRow={(rowData, sectionId, rowId) => {
          return (
            <List.Item onPress={action('clicked-item')} success={rowData.firstname.charAt(0) === "J"} warning={rowData.firstname.charAt(0) === "L"}>
              <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Avatar icon={"icon-badge"} circle lightGray style={{ marginRight: 10 }} />
                  <View style={{ flexDirection: 'column' }}>
                    <Text marginBottom={false}>{`${rowData.firstname} ${rowData.lastname}`}</Text>
                    <Hint marginBottom={false}>{`lorem ipsum`}</Hint>
                  </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Icon name="icon-profile" style={{ marginRight: 10 }} />
                </View>
              </View>
            </List.Item>
          );
        }}
      />
    </View>
  ))
  .add('with Reload', () => (
    <ReloadSample />
  ));
