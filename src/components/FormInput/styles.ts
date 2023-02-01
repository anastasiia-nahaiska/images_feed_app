import { StyleSheet } from 'react-native';
import { colors } from '../../constants/styles/colors';
import { fontSizes } from '../../constants/styles/fontSizes';

export const styles = StyleSheet.create({
  root: {
    position: 'relative',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',

    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: '100%',

    backgroundColor: '#F8F8FA',
    borderRadius: 10,
  },
  innerText: {
    fontSize: fontSizes.large,
  },
  message: {
    position: 'absolute',
    bottom: -10,

    fontSize: fontSizes.small,
    color: colors.red,
  },
});
