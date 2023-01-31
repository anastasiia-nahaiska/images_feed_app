import React from 'react';
import { StyleSheet } from 'react-native';
import { Image, View, Text } from 'react-native';
import { ImageI } from '../../types/Image';

type Props = {
  image: ImageI;
};

export const ImageListItem: React.FC<Props> = ({ image }) => {
  return (
    <View style={styles.root}>
      <Image source={{ uri: image.download_url }} style={styles.image} />
      <View style={styles.author}>
        <Text style={styles.authorText}>{image.author}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    // flex: 1,
    marginBottom: '10%',
    backgroundColor: '#161827',
  },
  image: {
    position: 'relative',
    width: '100%',
    height: 250,
    borderRadius: 10,
  },
  author: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingHorizontal: '2%',
    paddingVertical: '2%',
    backgroundColor: 'rgba(22, 24, 39, 0.5)',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  authorText: {
    color: '#fff',
  },
});
