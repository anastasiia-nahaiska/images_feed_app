import React from 'react';
import { Text, View } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../../constants/styles/colors';
import { styles } from './styles';

export const NetworkInfo: React.FC = () => (
  <View style={styles.root}>
    <MaterialIcon name="portable-wifi-off" size={30} color={colors.white} />
    <Text style={styles.message}>No network connection</Text>
  </View>
);
