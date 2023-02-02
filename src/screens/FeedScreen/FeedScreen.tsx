import React, { useContext } from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { TopTabParamList } from '../../types/NavigationParamLists';
import { ImagesList } from '../../components/ImagesList';
import { View } from 'react-native';
import { styles } from './styles';
import { NetworkInfoContext } from '../../context/NetworkInfoContext';
import { NetworkInfo } from '../../components/NetworkInfo';

type Props = NativeStackScreenProps<TopTabParamList, 'Feed'>;

export const FeedScreen: React.FC<Props> = () => {
  const { isConnected } = useContext(NetworkInfoContext);

  return (
    <View style={styles.root}>
      {!isConnected && <NetworkInfo />}
      <ImagesList />
    </View>
  );
};
