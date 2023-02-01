import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { View } from 'react-native';
import { TopTabParamList } from '../../types/RootStackParamList';
import { StyleSheet } from 'react-native';
import { UserCard } from '../../components/UserCard';

type Props = NativeStackScreenProps<TopTabParamList, 'Profile'>;

export const ProfileScreen: React.FC<Props> = () => {
  return (
    <View style={styles.root}>
      <UserCard />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: '5%',
    paddingVertical: '10%',
    backgroundColor: '#161827',
  },
});
