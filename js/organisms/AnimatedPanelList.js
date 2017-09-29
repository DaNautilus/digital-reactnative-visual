import React, { Component } from 'react';
import {
  Animated,
  SectionList,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const AnimatedSectionList = Animated.createAnimatedComponent(SectionList);

import * as colors from '../colors';
import * as vars from '../vars';

const STATUS_BAR_HEIGHT = Platform.select({ ios: 0, android: 24 });

export default class AnimatedPanelList extends Component {
  constructor(props) {
    super(props);

    const { navbarHeight } = props;

    const scrollAnim = new Animated.Value(0);
    const offsetAnim = new Animated.Value(0);

    this.state = {
      scrollAnim,
      offsetAnim,
      clampedScroll: Animated.diffClamp(
        Animated.add(
          scrollAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
            extrapolateLeft: 'clamp',
          }),
          offsetAnim,
        ),
        0,
        navbarHeight - STATUS_BAR_HEIGHT,
      ),
    };
  }

  _clampedScrollValue = 0;
  _offsetValue = 0;
  _scrollValue = 0;

  componentDidMount() {
    const { navbarHeight } = this.props;

    this.state.scrollAnim.addListener(({ value }) => {
      const diff = value - this._scrollValue;
      this._scrollValue = value;
      this._clampedScrollValue = Math.min(
        Math.max(this._clampedScrollValue + diff, 0),
        navbarHeight - STATUS_BAR_HEIGHT,
      );
    });
    this.state.offsetAnim.addListener(({ value }) => {
      this._offsetValue = value;
    });
  }

  componentWillUnmount() {
    this.state.scrollAnim.removeAllListeners();
    this.state.offsetAnim.removeAllListeners();
  }

  _onScrollEndDrag = () => {
    this._scrollEndTimer = setTimeout(this._onMomentumScrollEnd, 250);
  };

  _onMomentumScrollBegin = () => {
    clearTimeout(this._scrollEndTimer);
  };

  _onMomentumScrollEnd = () => {
    const { navbarHeight } = this.props;

    const toValue = this._scrollValue > navbarHeight &&
      this._clampedScrollValue > (navbarHeight - STATUS_BAR_HEIGHT) / 2
      ? this._offsetValue + navbarHeight
      : this._offsetValue - navbarHeight;

    Animated.timing(this.state.offsetAnim, {
      toValue,
      duration: 350,
      useNativeDriver: true,
    }).start();
  };

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
    const { data, withSections, renderSeparator, renderSectionHeader, renderItem, panel, navbarHeight, ...rest } = this.props;
    const { clampedScroll } = this.state;

    const navbarTranslate = clampedScroll.interpolate({
      inputRange: [0, navbarHeight - STATUS_BAR_HEIGHT],
      outputRange: [0, -(navbarHeight - STATUS_BAR_HEIGHT)],
      extrapolate: 'clamp',
    });
    const navbarOpacity = clampedScroll.interpolate({
      inputRange: [0, navbarHeight - STATUS_BAR_HEIGHT],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    });

    return (
      <View style={styles.fill}>
        <AnimatedSectionList
          ref="listView"
          contentContainerStyle={[styles.contentContainer, { paddingTop: navbarHeight, }]}
          sections={data}
          renderItem={renderItem}
          renderSectionHeader={withSections ? renderSectionHeader || this._renderSectionHeader : null}
          ItemSeparatorComponent={renderSeparator || this._renderSeparator}
          {...rest}
          onMomentumScrollBegin={this._onMomentumScrollBegin}
          onMomentumScrollEnd={this._onMomentumScrollEnd}
          onScrollEndDrag={this._onScrollEndDrag}
          scrollEventThrottle={1}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: this.state.scrollAnim } } }],
            { useNativeDriver: true },
          )}
        />
        <Animated.View style={[styles.navbar, { height: navbarHeight }, { transform: [{ translateY: navbarTranslate }] }]}>
          {panel}
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  fill: {
    flex: 1,
  },
  navbar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    //alignItems: 'center',
    backgroundColor: 'white',
    borderBottomColor: '#dedede',
    borderBottomWidth: 1,
    justifyContent: 'center',
    paddingTop: STATUS_BAR_HEIGHT,
  },
  contentContainer: {
  },
  title: {
    color: '#333333',
  },
  rowSeparator: {
    backgroundColor: colors.borderGray,
    height: 1
  },
  rowSeparatorHide: {
    opacity: 0.0,
  },
  sectionHeader: {
    backgroundColor: colors.labelGray,
    height: 40
  },
  sectionHeaderText: {
    fontFamily: vars.sansserif.light,
    fontSize: 16,
    color: colors.white,
    paddingLeft: 10,
    paddingVertical: 7
  }
});
