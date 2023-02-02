import { StyleSheet } from 'react-native';
import { colors } from '../../constants/styles/colors';
import { fontSizes } from '../../constants/styles/fontSizes';

export const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,

    marginBottom: '5%',
    width: '100%',
  },
  message: {
    fontSize: fontSizes.large,
    color: colors.white,
  },
});
