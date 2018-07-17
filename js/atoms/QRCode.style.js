import { StyleSheet } from 'react-native';
import * as colors from '../colors';

export default StyleSheet.create({
  camera: {
    flex: 1,
  },

  rectangleContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },

  rectangleContainerFound: {
    backgroundColor: 'rgba(95, 168, 42, 0.4)',
  },

  rectangle: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },

  rectangleFound: {
    borderWidth: 2,
    borderColor: colors.green,
  },

  rectangleInner: {
    borderColor: colors.darkGray,
    backgroundColor: 'transparent',
    position: 'absolute',
  },

  rectangleInnerFound: {
    borderColor: 'transparent',
  },
});
