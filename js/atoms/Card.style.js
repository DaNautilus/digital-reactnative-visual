import { StyleSheet } from 'react-native';
import * as colors from '../colors';
import * as vars from '../vars';

export default StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.borderGray,
    padding: 10,
    marginBottom: 10
    // borderTopWidth: 2,
    // borderColor: colors.white
  },
  transparent: {
    backgroundColor: 'rgba(254, 254, 254, 0.9)'
    // borderTopWidth: 2,
    // borderColor: colors.white
  },
  group: {
    marginBottom: 1
    // borderTopWidth: 2,
    // borderColor: colors.white
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 10
  }
});
