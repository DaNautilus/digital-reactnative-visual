import React, { Component } from 'react';
import { Animated, SectionList, Platform, StyleSheet, Text, View } from 'react-native';

import * as colors from '../colors';
import * as vars from '../vars';

const AnimatedSectionList = Animated.createAnimatedComponent(SectionList);

const STATUS_BAR_HEIGHT = Platform.select({ ios: 0, android: 0 });

export default class AnimatedPanelList extends Component {
  _clampedScrollValue = 0;

  _offsetValue = 0;

  _scrollValue = 0;

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
          offsetAnim
        ),
        0,
        navbarHeight - STATUS_BAR_HEIGHT
      ),
    };
  }

  componentDidMount() {
    const { navbarHeight } = this.props;
    const { scrollAnim, offsetAnim } = this.state;

    scrollAnim.addListener(({ value }) => {
      const diff = value - this._scrollValue;
      this._scrollValue = value;
      this._clampedScrollValue = Math.min(
        Math.max(this._clampedScrollValue + diff, 0),
        navbarHeight - STATUS_BAR_HEIGHT
      );
    });
    offsetAnim.addListener(({ value }) => {
      this._offsetValue = value;
    });
  }

  componentWillUnmount() {
    const { scrollAnim, offsetAnim } = this.state;

    scrollAnim.removeAllListeners();
    offsetAnim.removeAllListeners();
  }

  _onScrollEndDrag = () => {
    this._scrollEndTimer = setTimeout(this._onMomentumScrollEnd, 250);
  };

  _onMomentumScrollBegin = () => {
    clearTimeout(this._scrollEndTimer);
  };

  _onMomentumScrollEnd = () => {
    const { navbarHeight } = this.props;
    const { offsetAnim } = this.state;

    const toValue =
      this._scrollValue > navbarHeight &&
      this._clampedScrollValue > (navbarHeight - STATUS_BAR_HEIGHT) / 2
        ? this._offsetValue + navbarHeight
        : this._offsetValue - navbarHeight;

    Animated.timing(offsetAnim, {
      toValue,
      duration: 350,
      useNativeDriver: true,
    }).start();
  };

  // eslint-disable-next-line class-methods-use-this
  _renderSectionHeader({ section }) {
    return (
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderText}>{section.title}</Text>
      </View>
    );
  }

  // eslint-disable-next-line class-methods-use-this
  _renderSeparator() {
    const style = styles.rowSeparator;
    return <View style={style} />;
  }

  render() {
    const {
      data,
      withSections,
      renderSeparator,
      renderSectionHeader,
      renderItem,
      panel,
      navbarHeight,
      ...rest
    } = this.props;
    const { clampedScroll, scrollAnim } = this.state;

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

    const listTranslate = clampedScroll.interpolate({
      inputRange: [0, navbarHeight - STATUS_BAR_HEIGHT],
      outputRange: [navbarHeight - STATUS_BAR_HEIGHT, 0],
      extrapolate: 'clamp',
    });

    if (Platform.OS === 'ios') {
      return (
        <View style={styles.fill}>
          <Animated.View style={[{ transform: [{ translateY: listTranslate }] }]}>
            <AnimatedSectionList
              contentContainerStyle={[
                styles.contentContainer,
                { paddingTop: Platform.select({ ios: 0, android: navbarHeight }) },
              ]}
              sections={data}
              renderItem={renderItem}
              renderSectionHeader={
                withSections ? renderSectionHeader || this._renderSectionHeader : null
              }
              ItemSeparatorComponent={renderSeparator || this._renderSeparator}
              {...rest}
              onMomentumScrollBegin={this._onMomentumScrollBegin}
              onMomentumScrollEnd={this._onMomentumScrollEnd}
              onScrollEndDrag={this._onScrollEndDrag}
              scrollEventThrottle={1}
              onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollAnim } } }], {
                useNativeDriver: true,
              })}
            />
          </Animated.View>
          <Animated.View
            style={[
              styles.navbar,
              { height: navbarHeight },
              { opacity: navbarOpacity, transform: [{ translateY: navbarTranslate }] },
            ]}
          >
            {panel}
          </Animated.View>
        </View>
      );
    }

    return (
      <View style={styles.fill}>
        {/* <Animated.View style={[{ transform: [{ translateY: listTranslate }] }]}> */}
        <AnimatedSectionList
          contentContainerStyle={[
            styles.contentContainer,
            { paddingTop: Platform.select({ ios: 0, android: navbarHeight }) },
          ]}
          sections={data}
          renderItem={renderItem}
          renderSectionHeader={
            withSections ? renderSectionHeader || this._renderSectionHeader : null
          }
          ItemSeparatorComponent={renderSeparator || this._renderSeparator}
          {...rest}
          onMomentumScrollBegin={this._onMomentumScrollBegin}
          onMomentumScrollEnd={this._onMomentumScrollEnd}
          onScrollEndDrag={this._onScrollEndDrag}
          scrollEventThrottle={1}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollAnim } } }], {
            useNativeDriver: true,
          })}
        />
        {/* </Animated.View> */}
        <Animated.View
          style={[
            styles.navbar,
            { height: navbarHeight },
            { opacity: navbarOpacity, transform: [{ translateY: navbarTranslate }] },
          ]}
        >
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
    // alignItems: 'center',
    backgroundColor: 'white',
    borderBottomColor: '#dedede',
    borderBottomWidth: 1,
    justifyContent: 'center',
    paddingTop: STATUS_BAR_HEIGHT,
  },
  contentContainer: {},
  title: {
    color: '#333333',
  },
  rowSeparator: {
    backgroundColor: colors.borderGray,
    height: 1,
  },
  rowSeparatorHide: {
    opacity: 0.0,
  },
  sectionHeader: {
    backgroundColor: colors.labelGray,
    height: 40,
  },
  sectionHeaderText: {
    fontFamily: vars.sansserif.light,
    fontSize: 16,
    color: colors.white,
    paddingLeft: 10,
    paddingVertical: 7,
  },
});
