import { StyleSheet } from 'react-native';
import * as colors from '../colors';

export default StyleSheet.create({
  container: {
    minHeight: 50,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: colors.white,
    paddingHorizontal: 7,
    paddingVertical: 10,
    borderLeftWidth: 3,
  },
});
