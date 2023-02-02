import { StyleSheet } from 'react-native';
import { colors } from '../../constants/styles/colors';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    gap: 20,

    paddingHorizontal: '5%',
    paddingTop: '10%',
    backgroundColor: colors.primary,
  },
  netinfoWithRefresh: {
    alignItems: 'center',
    gap: 20,
  },
});
