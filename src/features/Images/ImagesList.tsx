import React, { useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { ImageListItem } from '../../components/ImageListItem';
import * as imagesActions from './ImagesSlice';

export const ImagesList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { images, page } = useAppSelector(state => state.images);

  const loadMore = () => {
    dispatch(imagesActions.increasePage());
  };
  console.warn(page);

  useEffect(() => {
    dispatch(imagesActions.load({ page, limit: 3 }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <FlatList
      data={images}
      renderItem={({ item }) => <ImageListItem image={item} />}
      keyExtractor={image => image.id}
      onEndReachedThreshold={0.3}
      onEndReached={loadMore}
      style={styles.root}
    />
  );
};

const styles = StyleSheet.create({
  root: {
    marginHorizontal: 'auto',
  },
});
