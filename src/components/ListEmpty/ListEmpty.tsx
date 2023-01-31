import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from 'react-native';

export const ListEmpty: React.FC = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.message}>No images yet</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
  },
  message: {
    color: '#fff',
    fontSize: 16,
  },
});
