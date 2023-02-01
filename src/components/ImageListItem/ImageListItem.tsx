import React from 'react';
import { Image, View, Text } from 'react-native';
import { ImageI } from '../../types/Image';
import { styles } from './styles';

type Props = {
  image: ImageI;
};

export const ImageListItem: React.FC<Props> = ({ image }) => {
  return (
    <View style={styles.root}>
      <Image source={{ uri: image.download_url }} style={styles.image} />
      <View style={styles.authorBox}>
        <Text style={styles.authorText}>{image.author}</Text>
      </View>
    </View>
  );
};
