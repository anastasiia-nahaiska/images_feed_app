import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

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

const styles = StyleSheet.create({
  root: {
    paddingVertical: 30,
    paddingHorizontal: 20,
    width: '100%',

    backgroundColor: '#384436',
    borderRadius: 10,
    elevation: 8,
  },
  content: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    position: 'absolute',
    right: 0,
  },
  buttonText: {
    fontSize: 20,
    letterSpacing: 1,
    textTransform: 'uppercase',
    textAlign: 'center',
    color: '#fff',
  },
});
