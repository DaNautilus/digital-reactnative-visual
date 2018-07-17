import React from 'react';
import { ScrollView, View, Dimensions } from 'react-native';
import colors from '../colors';

const styles = {
  page: {
    flex: 1,
    backgroundColor: colors.backgroundGray,
    paddingTop: 10,
    paddingBottom: 10,
  },
};

export function Page({ noScroll, style, children, ...rest }) {
  if (noScroll) {
    return (
      <View style={[styles.page, style]} {...rest}>
        {children}
      </View>
    );
  }
  return (
    <ScrollView style={[styles.page, style]} {...rest}>
      {children}
    </ScrollView>
  );
}

export function Row({ children }) {
  const { width } = Dimensions.get('window');

  return (
    <View style={{ flex: 1, flexDirection: width > 600 ? 'row' : 'column', paddingHorizontal: 5 }}>
      {children}
    </View>
  );
}

export function Col({ children, flex = 1 }) {
  return <View style={{ flex, paddingHorizontal: 5 }}>{children}</View>;
}
