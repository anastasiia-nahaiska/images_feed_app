import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { View } from 'react-native';
import { TopTabParamList } from '../../types/RootStackParamList';

type Props = NativeStackScreenProps<TopTabParamList, 'Profile'>;

export const ProfileScreen: React.FC<Props> = () => <View />;
