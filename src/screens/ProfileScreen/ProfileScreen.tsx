import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { View } from 'react-native';
import { TopTabParamList } from '../../types/NavigationParamLists';
import { UserCard } from '../../components/UserCard';
import { styles } from './styles';

type Props = NativeStackScreenProps<TopTabParamList, 'Profile'>;

export const ProfileScreen: React.FC<Props> = () => {
  return (
    <View style={styles.root}>
      <UserCard />
    </View>
  );
};
