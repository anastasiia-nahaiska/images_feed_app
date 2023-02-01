import { StyleSheet } from 'react-native';
import { colors } from '../../constants/styles/colors';
import { fontSizes } from '../../constants/styles/fontSizes';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
  },
  message: {
    color: colors.white,
    fontSize: fontSizes.large,
  },
});
