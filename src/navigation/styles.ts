import { StyleSheet } from 'react-native';
import { colors } from '../constants/styles/colors';
import { fontSizes } from '../constants/styles/fontSizes';

export const styles = StyleSheet.create({
  barItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  tabIcon: {
    width: 30,
    height: 30,
  },
  tabBar: {
    justifyContent: 'center',
    height: 60,
    backgroundColor: colors.primary,
  },
  tabLabel: {
    fontSize: fontSizes.large,
    color: colors.white,
  },
  tabIndicator: {
    backgroundColor: colors.secondary,
    height: 2,
  },
});
