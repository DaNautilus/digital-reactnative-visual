import { StyleSheet, Platform } from 'react-native';
import * as colors from '../colors';
import * as vars from '../vars';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.borderGray,
    paddingHorizontal: 5,
    paddingTop: 5,
  },
  textfield: {
    height: Platform.OS === 'ios' ? 30 : 40,
    fontSize: 16,
    fontFamily: vars.sansserif.light,
  },
});
