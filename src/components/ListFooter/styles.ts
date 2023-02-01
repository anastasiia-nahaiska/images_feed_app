import { StyleSheet } from 'react-native';
import { colors } from '../../constants/styles/colors';
import { fontSizes } from '../../constants/styles/fontSizes';

export const styles = StyleSheet.create({
  root: {
    paddingTop: '5%',
    paddingBottom: '10%',
  },
  message: {
    color: colors.white,
    fontSize: fontSizes.large,
    textAlign: 'center',
  },
});
