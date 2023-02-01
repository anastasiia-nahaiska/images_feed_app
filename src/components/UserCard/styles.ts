import { StyleSheet } from 'react-native';
import { colors } from '../../constants/styles/colors';
import { fontSizes } from '../../constants/styles/fontSizes';

export const styles = StyleSheet.create({
  root: {
    position: 'relative',

    flexDirection: 'row',
    alignItems: 'flex-start',

    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 10,

    backgroundColor: colors.secondary,
  },
  avatar: {
    justifyContent: 'center',
    alignItems: 'center',

    marginRight: 20,
    height: 80,
    width: 80,

    borderRadius: 40,
    backgroundColor: colors.red,
  },
  button: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  textFields: {
    width: '70%',
    gap: 6,
  },
  fieldName: {
    marginBottom: 2,
    fontSize: fontSizes.large,
    color: colors.white,
  },
  fieldValue: {
    fontSize: fontSizes.medium,
    color: colors.white,
    fontWeight: '300',
  },
});
