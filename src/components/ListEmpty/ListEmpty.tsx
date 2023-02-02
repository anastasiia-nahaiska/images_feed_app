import React, { useCallback } from 'react';
import { Text, View } from 'react-native';
import { useAppDispatch } from '../../app/hooks';
import * as imagesActions from '../../features/Images/ImagesSlice';
import { PressToRefresh } from '../PressToRefresh';
import { styles } from './styles';

export const ListEmpty: React.FC = () => {
  const dispatch = useAppDispatch();

  const loadFirstmagesPage = useCallback(() => {
    dispatch(imagesActions.load(1));
  }, []);

  return (
    <View style={styles.root}>
      <Text style={styles.message}>No images yet</Text>
      <PressToRefresh onPress={loadFirstmagesPage} />
    </View>
  );
};
