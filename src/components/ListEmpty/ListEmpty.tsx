import React, { useCallback } from 'react';
import { Text, View } from 'react-native';
import { useAppDispatch, useImages } from '../../app/hooks';
import * as imagesActions from '../../features/Images/ImagesSlice';
import { onError } from '../../utils/onError';
import { PressToRefresh } from '../PressToRefresh';
import { styles } from './styles';

export const ListEmpty: React.FC = () => {
  const dispatch = useAppDispatch();

  const { error } = useImages();

  const loadImagesPage = useCallback(() => {
    dispatch(imagesActions.load(1));

    if (error.length > 0) {
      onError(error);
    }
  }, [error]);

  return (
    <View style={styles.root}>
      <Text style={styles.message}>No images yet</Text>
      <PressToRefresh onPress={loadImagesPage} />
    </View>
  );
};
