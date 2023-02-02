import React, { useCallback, useContext } from 'react';
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

type Props = NativeStackScreenProps<TopTabParamList, 'Feed'>;

export const FeedScreen: React.FC<Props> = () => {
  const { isConnected } = useContext(NetworkInfoContext);
  const { images } = useImages();

  const dispatch = useAppDispatch();

  const { error } = useImages();

  const loadImagesPage = useCallback(() => {
    dispatch(imagesActions.load(1));

    if (error.length > 0) {
      onError(error);
    }
  }, []);

  return (
    <View style={styles.root}>
      {!isConnected && images.length > 0 && <NetworkInfo />}

      {!isConnected && !images.length && (
        <View style={styles.netinfoWithRefresh}>
          <NetworkInfo />
          <PressToRefresh onPress={loadImagesPage} />
        </View>
      )}

      <ImagesList />
    </View>
  );
};
