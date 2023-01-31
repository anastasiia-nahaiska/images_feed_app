import React from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { TopTabParamList } from '../../types/RootStackParamList';
import { ImagesList } from '../../features/Images/ImagesList';
// import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, View } from 'react-native';

type Props = NativeStackScreenProps<TopTabParamList, 'Feed'>;

export const FeedScreen: React.FC<Props> = () => {
  return (
    <View style={styles.root}>
      <ImagesList />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: '5%',
    paddingTop: '10%',
    backgroundColor: '#161827',
  },
});
