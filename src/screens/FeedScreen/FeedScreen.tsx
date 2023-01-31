import React from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text, Pressable, Alert } from 'react-native';
import { TopTabParamList } from '../../types/RootStackParamList';

type Props = NativeStackScreenProps<TopTabParamList, 'Feed'>;

export const FeedScreen: React.FC<Props> = () => {
  return (
    <Pressable onPress={() => Alert.alert('do')}>
      <Text>Press</Text>
    </Pressable>
  );
};
