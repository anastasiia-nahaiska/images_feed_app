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
import { StyleSheet } from 'react-native';

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

const styles = StyleSheet.create({
  barItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  tabIcon: {
    width: 30,
    height: 30,
  },
  tabBar: {
    justifyContent: 'center',
    height: 60,
    backgroundColor: '#161827',
  },
  tabLabel: {
    fontSize: 18,
  },
  tabIndicator: {
    backgroundColor: '#384436',
    height: 2,
  },
});

const options = {
  tabBarShowIcon: true,
  tabBarActiveTintColor: '#fff',
  tabBarIndicatorStyle: {
    ...styles.tabIndicator,
  },
  tabBarLabelStyle: { fontSize: 18 },
  tabBarStyle: {
    ...styles.tabBar,
  },
  tabBarItemStyle: {
    ...styles.barItem,
  },
  tabBarIconStyle: {
    ...styles.tabIcon,
  },
};
