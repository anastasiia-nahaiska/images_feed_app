import React, { useCallback, useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  StyleSheet,
  View,
} from 'react-native';
import Snackbar from 'react-native-snackbar';

import { useAppDispatch, useImages } from '../../app/hooks';
import { ImageListItem } from '../../components/ImageListItem';
import { ListEmpty } from '../../components/ListEmpty';
import { ListFooter } from '../../components/ListFooter';
import * as imagesActions from './ImagesSlice';

export const ImagesList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { images, page, loading, error } = useImages();
  const [refreshing, setRefreshing] = useState(false);

  const LIMIT = 3;

  const resetImages = () => dispatch(imagesActions.resetImages());
  const setNextPage = () => dispatch(imagesActions.increasePage());
  const loadImages = (targetPage: number, limit: number) =>
    dispatch(imagesActions.load({ page: targetPage, limit }));

  const onError = useCallback(() => {
    Snackbar.show({
      text: 'Opss... Can not load images',
      duration: Snackbar.LENGTH_LONG,
      action: {
        text: 'Try again',
        onPress: () => dispatch(imagesActions.load({ page, limit: 3 })),
      },
    });
  }, [page]);

  const onRefresh = async () => {
    setRefreshing(true);

    resetImages();
    console.warn(page);
    if (error.length > 0) {
      onError();
    }

    setRefreshing(false);
  };

  useEffect(() => {
    loadImages(page, LIMIT);

    if (error.length > 0) {
      onError();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <View style={styles.root}>
      {loading && page === 1 ? (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#ffffff" />
        </View>
      ) : (
        <FlatList
          data={images}
          renderItem={({ item }) => <ImageListItem image={item} />}
          keyExtractor={image => image.id}
          onEndReachedThreshold={0.3}
          onEndReached={setNextPage}
          ListFooterComponent={<ListFooter />}
          ListEmptyComponent={<ListEmpty />}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      )}
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
