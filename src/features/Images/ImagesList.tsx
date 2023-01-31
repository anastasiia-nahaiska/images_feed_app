import React, { useCallback, useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  StyleSheet,
  View,
} from 'react-native';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { ImageListItem } from '../../components/ImageListItem';
import * as imagesActions from './ImagesSlice';

export const ImagesList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { images, page, loading } = useAppSelector(state => state.images);
  const [refreshing, setRefreshing] = useState(false);

  const loadMore = () => {
    dispatch(imagesActions.increasePage());
  };

  const onRefresh = useCallback(async () => {
    setRefreshing(true);

    dispatch(imagesActions.resetImages());
    dispatch(imagesActions.setPage(1));
    dispatch(imagesActions.load({ page, limit: 3 }));

    setRefreshing(false);
  }, [dispatch, page]);

  useEffect(() => {
    dispatch(imagesActions.load({ page, limit: 3 }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  console.warn(page);
  console.warn(loading);

  return (
    <View style={styles.root}>
      {page === 1 && loading && !refreshing && (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#905BFF" />
        </View>
      )}

      <FlatList
        data={images}
        renderItem={({ item }) => <ImageListItem image={item} />}
        keyExtractor={image => image.id}
        onEndReachedThreshold={0.3}
        onEndReached={loadMore}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
