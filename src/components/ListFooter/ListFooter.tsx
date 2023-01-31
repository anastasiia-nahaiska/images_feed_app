import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { useImages } from '../../app/hooks';

export const ListFooter: React.FC = () => {
  const { page, loading, isEndOfList } = useImages();

  return (
    <View style={styles.root}>
      {loading && page !== 1 && <ActivityIndicator size="small" color="#fff" />}
      {isEndOfList && <Text style={styles.message}>No images more</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    padding: '3%',
  },
  message: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});
