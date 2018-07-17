import { StyleSheet } from 'react-native';
import * as colors from '../colors';

export default StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.borderGray,
    padding: 10,
    marginBottom: 10,
  },
  transparent: {
    backgroundColor: 'rgba(254, 254, 254, 0.9)',
  },
  group: {
    marginBottom: 1,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 10,
  },
});
