import { StyleSheet } from 'react-native';
import * as colors from '../colors';
import * as vars from '../vars';

export default StyleSheet.create({
  container: {
    height: 44,
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  containerMinWidth: {
    minWidth: 160,
    maxWidth: 160,
  },
  text: {
    fontFamily: vars.sansserif.light,
    color: colors.textGray,
    fontSize: 16,
    textAlign: 'center',
  },
  textIconButton: {
    fontSize: 10,
  },
  group: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
