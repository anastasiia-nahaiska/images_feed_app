import React, { useCallback, useContext, useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  View,
} from 'react-native';

import { useAppDispatch, useImages } from '../../app/hooks';
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

  const { images, page, loading } = useImages();

  const resetPage = useCallback(() => dispatch(imagesActions.resetPage()), []);

  const setNextPage = useCallback(() => {
    dispatch(imagesActions.increasePage());
  }, []);

  const loadImagesPage = useCallback((targetPage: number) => {
    dispatch(imagesActions.load(targetPage));
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);

    resetPage();
    loadImagesPage(1);

    setRefreshing(false);
  }, []);

  useEffect(() => {
    if (isConnected && page !== 1) {
      setNextPage();
    } else if (isConnected && page === 1) {
      loadImagesPage(page);
    }
  }, [isConnected]);

  useEffect(() => {
    loadImagesPage(page);
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
          onEndReachedThreshold={0.2}
          onEndReached={isConnected && images.length > 0 ? setNextPage : null}
          ListFooterComponent={<ListFooter />}
          ListEmptyComponent={isConnected ? <ListEmpty /> : null}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      )}
    </View>
  );
};
