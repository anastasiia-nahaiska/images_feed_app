import React, { useCallback, useContext, useEffect, useState } from 'react';
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
import { NetworkInfoContext } from '../../context/NetworkInfoContext';

export const ImagesList: React.FC = () => {
  const [refreshing, setRefreshing] = useState(false);
  const { isConnected } = useContext(NetworkInfoContext);
  const dispatch = useAppDispatch();

  const { images, page, loading, error } = useImages();
  const { user } = useUser();

  const LIMIT = 3;

  const setNextPage = useCallback(
    () => dispatch(imagesActions.increasePage()),
    [],
  );

  const resetPage = useCallback(() => dispatch(imagesActions.resetPage()), []);
  const resetImage = useCallback(
    () => dispatch(imagesActions.resetImage()),
    [],
  );

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
    resetImage();
  }, [user]);

  useEffect(() => {
    loadImages(page, LIMIT);

    if (error.length > 0) {
      onError();
    }
  }, [page]);

  useEffect(() => {
    if (isConnected) {
      onRefresh();
    }
  }, [isConnected]);

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
          onEndReached={isConnected ? setNextPage : null}
          ListFooterComponent={<ListFooter />}
          ListEmptyComponent={isConnected && !loading ? <ListEmpty /> : null}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      )}
    </View>
  );
};
