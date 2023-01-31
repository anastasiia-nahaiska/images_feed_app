import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/RootStackParamList';
import { TouchableOpacity, Text, View } from 'react-native';

type Props = NativeStackScreenProps<RootStackParamList, 'Auth'>;

export const AuthScreen: React.FC<Props> = ({ navigation }) => {
  const handleLogOut = () => {
    console.warn('press');
    navigation.navigate('Root');
  };

  return (
    <View>
      <TouchableOpacity onPress={handleLogOut}>
        <Text>Log out</Text>
      </TouchableOpacity>
    </View>
  );
};
