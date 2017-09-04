import { StyleSheet } from 'react-native';
import * as colors from '../colors';
import * as vars from '../vars';

export default StyleSheet.create({
  row: {
    flexDirection: 'row'
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
