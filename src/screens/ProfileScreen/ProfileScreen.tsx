import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { View } from 'react-native';
import { TopTabParamList } from '../../types/RootStackParamList';
import { StyleSheet } from 'react-native';

type Props = NativeStackScreenProps<TopTabParamList, 'Profile'>;

export const ProfileScreen: React.FC<Props> = () => (
  <View style={styles.root} />
);

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: '5%',
    paddingVertical: '10%',
    backgroundColor: '#161827',
  },
});
