import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native';

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
    <ScrollView style={style.main}>
      {props.children}
    </ScrollView>
  );
}

Page.defaultProps = {
  children: null,
};

Page.propTypes = {
  children: PropTypes.node,
};
