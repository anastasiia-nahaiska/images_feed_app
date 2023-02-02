import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

export const ListEmpty: React.FC = () => (
  <View style={styles.root}>
    <Text style={styles.message}>No images yet</Text>
  </View>
);
