import { StyleSheet } from 'react-native';
import { colors } from '../../constants/styles/colors';
import { fontSizes } from '../../constants/styles/fontSizes';

export const styles = StyleSheet.create({
  root: {
    paddingVertical: 30,
    paddingHorizontal: 20,
    width: '100%',

    backgroundColor: colors.secondary,
    borderRadius: 10,
    elevation: 8,
  },
  content: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    position: 'absolute',
    right: 0,
  },
  buttonText: {
    fontSize: fontSizes.extraLarge,
    letterSpacing: 1,
    textTransform: 'uppercase',
    textAlign: 'center',
    color: colors.white,
  },
});
