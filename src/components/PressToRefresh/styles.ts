import { StyleSheet } from 'react-native';
import { colors } from '../../constants/styles/colors';
import { fontSizes } from '../../constants/styles/fontSizes';

export const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    width: '50%',
  },
  message: {
    borderBottomWidth: 1,
    borderBottomColor: colors.secondary,
    color: colors.secondary,
    fontSize: fontSizes.large,
  },
});
