import { StyleSheet } from 'react-native';
import { colors } from '../../constants/styles/colors';
import { fontSizes } from '../../constants/styles/fontSizes';

export const styles = StyleSheet.create({
  root: {
    flexGrow: 1,
    alignItems: 'center',
    gap: 30,
  },
  message: {
    color: colors.white,
    fontSize: fontSizes.extraLarge,
  },
  refresh: {
    borderBottomWidth: 1,
    borderBottomColor: colors.secondary,
    color: colors.secondary,
    fontSize: fontSizes.large,
  },
});
