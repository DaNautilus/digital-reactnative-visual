import React, { Component } from 'react';
import { ListView, RefreshControl, View } from 'react-native';

import { Text } from './Typography';
import ListItem from './List.Item'

import styles from './List.style.js';

export default class List extends Component {
  constructor(props) {
    super(props);

    const config = {
      rowHasChanged: this.props.rowHasChanged || ((r1, r2) => r1 !== r2),
    }
    if (props.withSections) config.sectionHeaderHasChanged = this.props.sectionHeaderHasChanged || ((s1, s2) => s1 !== s2);

    this.state = {
      dataSource: new ListView.DataSource(config)
    }

    this.updateDataSource = this.updateDataSource.bind(this);

    const update = this.updateDataSource(props.data);
    if (update) {
      this.state = {
        dataSource: update
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.data !== this.props.data) {
      this.setState({
        dataSource: this.updateDataSource(nextProps.data)
      });
    }
  }

  updateDataSource(d) {
    if (!d) return;

    if (d.sectionIds) {
      const { data, sectionIds } = d;
      return this.state.dataSource.cloneWithRowsAndSections(data, sectionIds);
    } else {
      if (!d.length) return;
      return this.state.dataSource.cloneWithRows(d);
    }
  }

  _renderSectionHeader(data, sectionId) {
    return (
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderText}>{sectionId}</Text>
      </View>
    );
  }

  _renderSeparator(sectionID, rowID, adjacentRowHighlighted) {
    var style = styles.rowSeparator;
    if (adjacentRowHighlighted) {
        style = [style, styles.rowSeparatorHide];
    }
    return (
      <View key={"SEP_" + sectionID + "_" + rowID}  style={style}/>
    );
  }

  render() {
    const { renderSectionHeader, renderSeparator, renderRow, withSections, onRefresh, isRefreshing, refreshDescription, ...props } = this.props;
    const { dataSource } = this.state;

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

    return (
      <ListView
        ref="listView"
        refreshControl={RefreshComponent}
        automaticallyAdjustContentInsets={false}
        dataSource={dataSource}
        renderRow={renderRow}
        renderSectionHeader={withSections ? renderSectionHeader || this._renderSectionHeader : null}
        renderSeparator={renderSeparator || this._renderSeparator}
        {...props}
      />
    );
  }
}

List.Item = ListItem;
