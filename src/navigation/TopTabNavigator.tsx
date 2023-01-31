import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { FeedScreen } from '../screens/FeedScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  RootStackParamList,
  TopTabParamList,
} from '../types/RootStackParamList';

type Props = NativeStackScreenProps<RootStackParamList, 'Root'>;

const Tab = createMaterialTopTabNavigator<TopTabParamList>();

export const TopTabNavigator: React.FC<Props> = () => {
  return (
    <Tab.Navigator initialRouteName="Feed">
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};
