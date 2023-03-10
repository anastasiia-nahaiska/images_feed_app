import React, { useCallback, useContext, useEffect } from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { TopTabParamList } from '../../types/NavigationParamLists';
import { ImagesList } from '../../components/ImagesList';
import { View } from 'react-native';
import { styles } from './styles';
import { NetworkInfoContext } from '../../context/NetworkInfoContext';
import { NetworkInfo } from '../../components/NetworkInfo';
import { useAppDispatch, useImages } from '../../app/hooks';
import { PressToRefresh } from '../../components/PressToRefresh';
import { onError } from '../../utils/onError';
import * as imagesActions from '../../features/Images/ImagesSlice';
import { fontSizes } from '../../constants/styles/fontSizes';

type Props = NativeStackScreenProps<TopTabParamList, 'Feed'>;

export const FeedScreen: React.FC<Props> = () => {
  const { isConnected } = useContext(NetworkInfoContext);
  const { images } = useImages();
  const { error, loading } = useImages();

  const dispatch = useAppDispatch();

  const loadFirstImagesPage = useCallback(() => {
    dispatch(imagesActions.load(1));
  }, []);

  useEffect(() => {
    if (error.length > 0) {
      onError(error);
    }
  }, [error]);

  return (
    <View style={styles.root}>
      {!isConnected && images.length > 0 && !loading && (
        <NetworkInfo fontSize={fontSizes.large} iconSize={20} />
      )}

      {!isConnected && !images.length && !loading && (
        <View style={styles.netinfoWithRefresh}>
          <NetworkInfo />
          <PressToRefresh onPress={loadFirstImagesPage} />
        </View>
      )}

      <ImagesList />
    </View>
  );
};
