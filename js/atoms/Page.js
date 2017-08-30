import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

const style = {
  main: {
    flex: 1,
    backgroundColor: '#ededeb',
    paddingTop: 10,
    paddingBottom: 10
  },
};


export default function Page(props) {
  return (
    <View style={style.main}>
      {props.children}
    </View>
  );
}

Page.defaultProps = {
  children: null,
};

Page.propTypes = {
  children: PropTypes.node,
};
