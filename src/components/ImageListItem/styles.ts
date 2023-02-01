import { StyleSheet } from 'react-native';
import { colors } from '../../constants/styles/colors';
import { fontSizes } from '../../constants/styles/fontSizes';

export const styles = StyleSheet.create({
  root: {
    marginBottom: '10%',
    borderRadius: 10,
  },
  image: {
    position: 'relative',
    width: '100%',
    height: 250,
    borderRadius: 10,
  },
  authorBox: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingHorizontal: '2%',
    paddingVertical: '2%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  authorText: {
    color: colors.white,
    fontSize: fontSizes.small,
  },
});
