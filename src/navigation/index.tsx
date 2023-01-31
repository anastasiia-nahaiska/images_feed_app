import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AuthScreen } from '../screens/AuthScreen';
import { TopTabNavigator } from './TopTabNavigator';
import { RootStackParamList } from '../types/RootStackParamList';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigation: React.FC = () => (
  <NavigationContainer>
    <Stack.Navigator
      // screenOptions={{ headerShown: false }}
      initialRouteName="Auth"
    >
      <Stack.Screen name="Auth" component={AuthScreen} />
      <Stack.Screen name="Root" component={TopTabNavigator} />
    </Stack.Navigator>
  </NavigationContainer>
);
