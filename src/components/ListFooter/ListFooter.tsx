import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { useImages } from '../../app/hooks';
import { styles } from './styles';

export const ListFooter: React.FC = () => {
  const { page, loading, isEndOfList } = useImages();

  return (
    <View style={styles.root}>
      {loading && page !== 1 && <ActivityIndicator size="small" color="#fff" />}
      {isEndOfList && <Text style={styles.message}>No images more</Text>}
    </View>
  );
};
