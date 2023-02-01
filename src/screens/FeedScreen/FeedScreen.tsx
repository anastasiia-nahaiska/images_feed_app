import React from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { TopTabParamList } from '../../types/NavigationParamLists';
import { ImagesList } from '../../components/ImagesList';
import { View } from 'react-native';
import { styles } from './styles';

type Props = NativeStackScreenProps<TopTabParamList, 'Feed'>;

export const FeedScreen: React.FC<Props> = () => {
  return (
    <View style={styles.root}>
      <ImagesList />
    </View>
  );
};
