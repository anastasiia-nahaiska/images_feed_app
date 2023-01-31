import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { FeedScreen } from '../screens/FeedScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
// import Icon from 'react-native-vector-icons/Ionicons';
import {
  RootStackParamList,
  TopTabParamList,
} from '../types/RootStackParamList';

type Props = NativeStackScreenProps<RootStackParamList, 'Root'>;

const Tab = createMaterialTopTabNavigator<TopTabParamList>();

export const TopTabNavigator: React.FC<Props> = () => {
  return (
    <Tab.Navigator initialRouteName="Feed" screenOptions={options}>
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const options = {
  tabBarActiveTintColor: '#fff',
  tabBarIndicatorStyle: {
    backgroundColor: '#fff',
    height: 2,
  },
  tabBarLabelStyle: { fontSize: 16 },
  tabBarStyle: {
    backgroundColor: '#161827',
  },
};
