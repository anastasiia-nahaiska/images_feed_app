import React, { useCallback, useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  View,
} from 'react-native';
import Snackbar from 'react-native-snackbar';

import { useAppDispatch, useImages, useUser } from '../../app/hooks';
import { ImageListItem } from '../ImageListItem';
import { ListEmpty } from '../ListEmpty';
import { ListFooter } from '../ListFooter';
import * as imagesActions from '../../features/Images/ImagesSlice';
import { styles } from './syles';

export const ImagesList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { user } = useUser();
  const { images, page, loading, error } = useImages();
  const [refreshing, setRefreshing] = useState(false);

  const LIMIT = 3;

  const setNextPage = useCallback(
    () => dispatch(imagesActions.increasePage()),
    [],
  );

  const resetPage = useCallback(() => dispatch(imagesActions.resetPage()), []);

  const loadImages = useCallback(
    (targetPage: number, limit: number) =>
      dispatch(imagesActions.load({ page: targetPage, limit })),
    [],
  );

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

  const onRefresh = useCallback(() => {
    setRefreshing(true);

    resetPage();

    loadImages(page, LIMIT);

    if (error.length > 0) {
      onError();
    }

    setRefreshing(false);
  }, [page, LIMIT, error]);

  useEffect(() => {
    resetPage();
  }, [user]);

  useEffect(() => {
    loadImages(page, LIMIT);

    if (error.length > 0) {
      onError();
    }
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
