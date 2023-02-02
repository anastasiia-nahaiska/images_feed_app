import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

type Props = {
  onPress: () => void;
};

export const PressToRefresh: React.FC<Props> = ({ onPress }) => (
  <View style={styles.root}>
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.message}>Press to refresh</Text>
    </TouchableOpacity>
  </View>
);
