import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { useImages } from '../../app/hooks';
import { styles } from './styles';

export const ListFooter: React.FC = () => {
  const { loading, isEndOfList, images } = useImages();

  return (
    <View style={styles.root}>
      {loading && images.length > 0 && (
        <ActivityIndicator size="small" color="#fff" />
      )}
      {isEndOfList && <Text style={styles.message}>No images more</Text>}
    </View>
  );
};
