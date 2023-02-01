import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { styles } from './styles';

type Props = {
  onSubmit: () => void;
};

export const LoginButton: React.FC<Props> = ({ onSubmit }) => (
  <TouchableOpacity onPress={onSubmit} style={styles.root}>
    <View style={styles.content}>
      <Text style={[styles.buttonText]}>Log in</Text>
      <MaterialIcon name="login" size={35} color="#fff" style={styles.icon} />
    </View>
  </TouchableOpacity>
);
