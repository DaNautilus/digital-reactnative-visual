import { Platform } from 'react-native';

export const sansserif = {
  light: Platform.OS === ‘ios’ ? ‘Poppins-Light’ : ‘Poppins-300’,
  semibold: Platform.OS === ‘ios’ ? ‘Poppins-SemiBold’ : ‘Poppins-600’,
};

const vars = {
  sansserif,
};

export default vars;
