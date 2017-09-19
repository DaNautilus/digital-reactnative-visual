import React, { Component } from 'react';
import { SectionList, FlatList, RefreshControl, View } from 'react-native';

import { Text } from './Typography';
import ListItem from './List.Item'

import styles from './List.style.js';

export default class List extends Component {
  _renderSectionHeader({ section }) {
    return (
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderText}>{section.title}</Text>
      </View>
    );
  }

  _renderSeparator() {
    var style = styles.rowSeparator;
    return (
      <View style={style}/>
    );
  }

  render() {
    const { data, renderSectionHeader, renderSeparator, renderItem, withSections, onRefresh, isRefreshing, refreshDescription, ...props } = this.props;

    let RefreshComponent = null;
    if (onRefresh) {
      RefreshComponent = (
        <RefreshControl
          refreshing={isRefreshing}
          onRefresh={onRefresh}
          title={refreshDescription}
        />
      );
    }

    if (!withSections) {
      return (
        <FlatList
          data={data}
          renderItem={renderItem}
          ItemSeparatorComponent={renderSeparator || this._renderSeparator}
          {...props}
        />
      )
    }

    return (
      <SectionList
        ref="listView"
        refreshControl={RefreshComponent}
        automaticallyAdjustContentInsets={false}
        sections={data}
        renderItem={renderItem}
        renderSectionHeader={withSections ? renderSectionHeader || this._renderSectionHeader : null}
        ItemSeparatorComponent={renderSeparator || this._renderSeparator}
        {...props}
      />
    );
  }
}

List.Item = ListItem;
