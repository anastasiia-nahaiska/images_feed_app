import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { FeedScreen } from '../screens/FeedScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import {
  RootStackParamList,
  TopTabParamList,
} from '../types/RootStackParamList';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { styles } from './styles';
import { colors } from '../constants/styles/colors';

type Props = NativeStackScreenProps<RootStackParamList, 'Root'>;

const Tab = createMaterialTopTabNavigator<TopTabParamList>();

export const TopTabNavigator: React.FC<Props> = () => {
  return (
    <Tab.Navigator initialRouteName="Feed" screenOptions={options}>
      <Tab.Screen
        name="Feed"
        component={FeedScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialIcon
              size={30}
              name="home"
              color={focused ? '#fff' : '#ccc'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarShowIcon: true,
          tabBarIcon: ({ focused }) => (
            <MaterialIcon
              size={30}
              name="account-circle"
              color={focused ? '#fff' : '#ccc'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const options = {
  tabBarShowIcon: true,
  tabBarActiveTintColor: colors.white,
  tabBarIndicatorStyle: { ...styles.tabIndicator },
  tabBarLabelStyle: { ...styles.tabLabel },
  tabBarStyle: { ...styles.tabBar },
  tabBarItemStyle: { ...styles.barItem },
  tabBarIconStyle: { ...styles.tabIcon },
};
