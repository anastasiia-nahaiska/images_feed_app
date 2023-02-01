import { StyleSheet } from 'react-native';
import { colors } from '../../constants/styles/colors';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: '5%',

    backgroundColor: colors.primary,
  },
  loginForm: {
    justifyContent: 'center',
    gap: 30,
    marginBottom: 70,
  },
});
